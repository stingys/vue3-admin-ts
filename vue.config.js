module.exports = {
    // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
    // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  css: {
    // css预设器配置项
    loaderOptions: {
      scss: { 
        prependData: `@import "@/styles/main.scss";`
      }
    }
  }
}