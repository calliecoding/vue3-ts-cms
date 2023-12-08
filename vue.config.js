const path = require('path')
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack').default
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  publicPath: './',
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    //   resolve: {
    //     alias: {
    //       components: '@/components'
    //     }
    //   }
    // },
    // configureWebpack: (config) => {
    //   config.resolve.alias = {
    //     '@': path.resolve(__dirname, 'src'),
    //     components: '@/components'
    //   }
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  // 3.配置方式三:
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
