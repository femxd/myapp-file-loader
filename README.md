# myapp file loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

myapp-file-loader is as same as [file-loader](https://github.com/webpack/file-loader)

## Filename templates

You can configure a custom filename template for your file using the query parameter `name` and `queryname`. 
parameter `name` is as same as file-loader.
`queryname`, you might use ?queryname=1. It will deal query parameter.

## Examples

``` javascript
require("file?name=[path][name].[ext]&queryname=1!./dir/file.png?__sprite__3x")
// => dir/file.__sprite__3x.png
```

## Installation

```npm install myapp-file-loader --save-dev```

