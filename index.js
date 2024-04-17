const {initFolders,initFiles,initWatchers} = require("./init/index")


class ViteDocCreator {
  constructor(options){
    this.options= {
      title:undefined,
      domain:undefined,
      port:0
    }
    if(options){
      Object.assign(this.options, options)
    }
    console.log('进入插件')
    this.initialize()
  }
  initialize(){
    initFolders()
    initFiles()
    initWatchers()
  }
}

module.exports = ViteDocCreator