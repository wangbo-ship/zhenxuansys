/*
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-08 20:37:46
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

// 获取vue实例
const app = createApp(App)

//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //国际化配置
})

//svg插件所需的配置代码
import 'virtual:svg-icons-register'

//引入并安装(use)自定义插件对象：注册整个项目全局组件 
import globalComponent from '@/components/index';
app.use(globalComponent);

//挂载
app.mount('#app')
