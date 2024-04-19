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

const regexp = {
  // 匹配ul menu-list内部的内容
  reg_ulContent: /<ul class=\"menu-list\">([\s\S]*?)<\/ul>/,
  // 匹配title中的内容
  reg_titleContent: /<title>([\s\S]*?)<\/title>/,
  // 匹配header-title中的内容
  reg_headerTitleContent: /<h1 class=\"header-title\">([\s\S]*?)<\/h1>/,
  // 匹配iframe page中的内容
  reg_iframeContent: /<div class=\"iframe-page\">([\s\S]*?)<\/div>/,
  // 匹配md.html内部的{{newStr}}
  reg_mdStr: /\{\{(.+?)\}\}/
}


module.exports = {
  port,
  domain,
  title,
  outerPath,
  innerPath,
  regexp
}