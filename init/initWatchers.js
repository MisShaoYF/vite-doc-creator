const {
  outerPath:{
    srcPath,
    htmlPath,
    jsPath,
    cssPath,
    mdPath
  }
} = require("../config")
const { createHtml,mdToHtml} = require('../compiler')
const {watch,unlinkSync,existsSync} = require('fs')
const initWatchers = (options) =>{
  watchHtml(options)
  watchMd(options)

}
function watchHtml(options){
  watch(htmlPath,function(event,filename){
    if(filename){
       createHtml(options,event==="change"?filename:'')
       return;
    }
  })
}

function watchMd(options){
  watch(mdPath,function(event,filename){
    if(filename){
      if(!existsSync(mdPath+'/'+filename)){
        //删除了md文件 需要把html一并删除 此时要判断html文件是否存在 存在就删除他
        const fileName = filename.replace('.md','.html')
        if(existsSync(htmlPath+'/'+fileName)){
          unlinkSync(fileName)
        }
      }
    }
    mdToHtml(filename)
  })
}
module.exports = initWatchers