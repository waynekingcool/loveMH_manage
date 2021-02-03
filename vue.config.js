// vue.config.js
const path = require('path')

module.exports = {
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
        return {
            resolve: {
                alias: {
                    '@js': path.resolve(__dirname, './src/assets/js'),
                    '@css': path.resolve(__dirname, './src/assets/css'),
                    '@imgs': path.resolve(__dirname, './src/assets/imgs'),
                    // 组件路径
                    '@c': path.resolve(__dirname, './src/components'),
                    // 视图
                    '@view': path.resolve(__dirname, './src/views'),
                }
            }
        }
      }
    }
  }