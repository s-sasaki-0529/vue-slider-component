module.exports = {
  parallel: false,
  publicPath:
    process.env.NODE_ENV === 'production' && process.env.VUE_APP_BUILD_MODE !== 'package'
      ? '/vue-slider-component/'
      : '/',
  outputDir: process.env.VUE_APP_BUILD_MODE === 'package' ? 'dist' : 'docs',
  chainWebpack: config => {
    if (process.env.VUE_APP_BUILD_MODE !== 'package') {
      config.resolve.alias.set('vue$', 'vue/dist/vue.common').set('~', __dirname)

      config.module
        .rule('vue')
        .test(/\.vue/)
        .use('vue-loader')
        .loader('vue-loader')
        .options({
          compilerOptions: {
            whitespace: 'preserve',
          },
        })
        .end()
    } else {
      config.output.libraryExport('default')
      config.externals({
        vue: {
          commonjs: 'vue',
          commonjs2: 'vue',
          root: 'Vue',
          amd: 'vue',
        },
      })
    }
  },
  css: { extract: !!process.env.NO_EXTRACT_CSS },
}
