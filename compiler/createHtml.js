const {
  title,
  outerPath:{htmlPath,rootPath},
  innerPath:{htmlDir},
  regexp: {
    reg_ulContent,
    reg_titleContent,
    reg_headerTitleContent,
    reg_iframeContent
  }
  } = require("../config")
const {readdirSync,copyFileSync,writeFileSync} = require('fs')
const {readFile,  createMenuItem,replaceHtml,createIframe} = require('../libs/utils')
function createHtml(options,outerFilename){
  //如果外层html文件夹为空 将模板index.html直接复制到外层根目录下
  const _htmlFiles = readdirSync(htmlPath)
    if(!_htmlFiles.length){
      copyFileSync(htmlDir+"/index.html",rootPath+"/index.html")
    }
    //将外层src里面html里面的文件读取后形成数组  遍历形成menu 再把他的某一项放到iframe里面去
    const _indexHtmlStr = readFile(htmlDir+"/index.html")
    let menuList = '';
    let newHtml = '';  
    // 如果outerFilename传入，找这个文件名在_htmlFiles里的下标
    // 作为菜单active设置和iframe选择文件的index
    let curIdx = outerFilename ? [].indexOf.call(_htmlFiles, outerFilename) : 0;
    
    //将插件中index.html读取成字符串 替换里面的menu page
    // 编写菜单模板  放入html对应位置  将html放到根路径的index.htm中
    _htmlFiles.map(function (filename, index) {
      menuList += createMenuItem(filename, options.domain, options.port, index === 0 ? true : false);
    });
  // 替换ul中的内容
    newHtml = replaceHtml(reg_ulContent, _indexHtmlStr, menuList);
  // 替换title中的内容
  newHtml = replaceHtml(reg_titleContent, newHtml, options.title || title);
  // 替换header-title中的内容
  newHtml = replaceHtml(reg_headerTitleContent, newHtml, options.title || title);
  // 替换iframe-page中的内容
  newHtml = replaceHtml(reg_iframeContent, newHtml, createIframe(_htmlFiles[curIdx], options.domain, options.port));
    writeFileSync(rootPath + '/index.html', newHtml, function (err) {
      if (err) {
        throw new Error('File is failed to write.', err);
      }
    });
}

module.exports={
  createHtml
}