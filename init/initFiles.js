const {
  outerPath:{
    cssPath,jsPath,htmlPath
  },
  innerPath:{
    cssDir,jsDir,htmlDir
  },
} = require('../config')
const {readdirSync,copyFileSync} =require('fs')
const {createHtml} = require('../compiler/index')
function initFiles(options){
  copyFiles('css')
  copyFiles('js')
  copyWelconHtml()
  createHtml(options)
}
function copyFiles(field){
  let 
    _innerPaths = [], 
    _outerPaths = [],
    _dir='',
    _path='';
  switch(field){
    case 'css':
      _innerPaths = readdirSync(cssDir)
      _outerPaths = readdirSync(cssPath)
      _dir= cssDir;
      _path = cssPath;
      break;
      
    case 'js':
      _innerPaths = readdirSync(jsDir)
      _outerPaths = readdirSync(jsPath)
      _dir= jsDir;
      _path = jsPath;
      break;
    default:
      break;
  }
  _innerPaths.map(path=>{
    if(_outerPaths.indexOf(path)===-1){
      copyFileSync(_dir+'/'+path,_path+'/'+path,0,function(err){
        if(err){
          console.log('err',err)
        } 
      })
    }
  })
}
function copyWelconHtml(){
  const _htmlFiles = readdirSync(htmlPath)
  if(!_htmlFiles.length){
    copyFileSync(htmlDir+'/welcome.html',htmlPath+'/welcome.html',0,function(err){
      if(err){
        console.log('err',err)
      } 
    })
  }
}
module.exports = initFiles