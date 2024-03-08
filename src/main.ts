/*
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-08 19:05:44
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件、样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore
import  zhCn  from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus,{
    locale:zhCn  //国际化配置
})
//svg插件所需的配置代码
import 'virtual:svg-icons-register'
app.mount('#app')
