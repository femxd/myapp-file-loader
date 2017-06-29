/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var loaderUtils = require("loader-utils");

module.exports = function(content) {
	this.cacheable && this.cacheable();
	if(!this.emitFile) throw new Error("emitFile is required from module system");

	var query = loaderUtils.getOptions(this) || {};
	var configKey = query.config || "fileLoader";
	var options = this.options[configKey] || {};

	var config = {
		publicPath: false,
		name: "[hash].[ext]"
	};

	// options takes precedence over config
	Object.keys(options).forEach(function(attr) {
		config[attr] = options[attr];
	});

	// query takes precedence over config and options
	Object.keys(query).forEach(function(attr) {
		config[attr] = query[attr];
	});

	var url = loaderUtils.interpolateName(this, config.name, {
		context: config.context || this.options.context,
		content: content,
		regExp: config.regExp
	});

	var parameter = this.resourceQuery || '';
	if (query.queryname == 1 && parameter.indexOf("?") == 0) {
		var arrUrl = url.split("."), arrUrlLen = arrUrl.length;
		parameter = parameter.replace("?", ".");
		var newUrl = "";
		for (i in arrUrl) {
			if (i == arrUrlLen - 1) {
				newUrl += parameter;
			}
			if (i == 0) {
				newUrl += arrUrl[i];
			} else {
				newUrl += "." + arrUrl[i];
			}
		}
		url = newUrl;
	} else if (query.queryname == 2) {
		url += parameter;
	}

	var publicPath = "__webpack_public_path__ + " + JSON.stringify(url);

	if (config.publicPath) {
		// support functions as publicPath to generate them dynamically
		publicPath = JSON.stringify(
				typeof config.publicPath === "function" 
				 ? config.publicPath(url) 
				 : config.publicPath + url
		);
	}

	if (query.emitFile === undefined || query.emitFile) {
		this.emitFile(url, content);
	}

	return "module.exports = " + publicPath + ";";
}
module.exports.raw = true;
