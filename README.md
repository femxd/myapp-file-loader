# myapp file loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

myapp-file-loader is as same as [file-loader](https://github.com/webpack/file-loader)
base on file-loader@0.10.0

## Filename templates

You can configure a custom filename template for your file using the query parameter `name` and `queryname`. 
parameter `name` is as same as file-loader.
`queryname`, you might use ?queryname=1. It will deal query parameter in file name. if you use ?queryname=2. It will deal query parameter after file name.

## Examples

``` javascript
require("file?name=[path][name].[ext]&queryname=1!./dir/file.png?__sprite__3x")
// => dir/file.__sprite__3x.png

require("file?name=[path][name].[ext]&queryname=2!./dir/file.png?__sprite__3x")
// => dir/file.png?__sprite__3x
```

## Installation

```npm install myapp-file-loader --save-dev```

