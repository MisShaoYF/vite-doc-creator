const {
  outerPath:{
    srcPath,
    htmlPath,
    jsPath,
    cssPath,
    mdPath
  }
} = require("../config")

const {existsSync,mkdirSync} =require('fs')
function initFolders(){
  if(!existsSync(srcPath)){
    createFolder(srcPath)
  }
  if(!existsSync(htmlPath)){
    createFolder(htmlPath)
  }
  if(!existsSync(jsPath)){
    createFolder(jsPath)
  }
  if(!existsSync(cssPath)){
    createFolder(cssPath)
  }
  if(!existsSync(mdPath)){
    createFolder(mdPath)
  }
}

function createFolder(path){
  mkdirSync(path,function(err){
    if(err){
      console.log('err',err)
    }
  })
}
module.exports = initFolders