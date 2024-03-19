/*
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 17:46:56
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
/// <reference types="vite/client" />
// declare module 'vue-router' //解决import vue-router找不到声明文件的问题
declare module '*.vue' {
  //解决 xxx 找不到声明文件的问题
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
