const {resolve} = require("path")
const port = process.env.npm_config_port || 3000;
const domain = "http://localhost"
const title = "This is my first doc"

const outerPath = {
  rootPath: resolve(__dirname,"../../../"),
  srcPath: resolve(__dirname,"../../../src"),
  htmlPath: resolve(__dirname,"../../../src/html"),
  jsPath: resolve(__dirname,"../../../src/js"),
  cssPath: resolve(__dirname,"../../../src/css"),
  mdPath: resolve(__dirname,"../../../src/workspace"),
}

const innerPath = {
    rootDir: resolve(__dirname,"../temp_files/"),
    htmlDir: resolve(__dirname,"../temp_files/html"),
    cssDir: resolve(__dirname,"../temp_files/css"),
    jsDir: resolve(__dirname,"../temp_files/js"),

}


module.exports = {
  port,
  domain,
  title,
  outerPath,
  innerPath
}