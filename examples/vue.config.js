module.exports = {
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      args[0].title = 'FormRule测试'
      return args
    })
  }
}
