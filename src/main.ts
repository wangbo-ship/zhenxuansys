/*
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-11 15:31:21
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件、样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件所需的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index'
//引入模板的全局样式
import '@/styles/index.scss'
//引入路由
import router from '@/router'
//引入仓库
import pinia from '@/store'
//引入路由鉴权文件
import './permission'
// 获取vue实例
const app = createApp(App)
// app.use() 方法在 Vue 应用中通常用于注册插件、第三方库或者全局中间件
// 中间件是一种在请求被处理前执行的函数。你可以使用中间件来处理全局错误、权限验证等任务
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //国际化配置
})
//安装(use)自定义插件对象
app.use(globalComponent)
//注册路由表
app.use(router)
//注册仓库
app.use(pinia)
//挂载
app.mount('#app')
