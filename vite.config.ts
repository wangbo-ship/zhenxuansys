/*
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-09 12:47:17
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//mock插件提供的方法
import { viteMockServe } from 'vite-plugin-mock'
//引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // svg存放位置
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        enable: command === 'serve', //保证开发阶断可以使用mock接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
