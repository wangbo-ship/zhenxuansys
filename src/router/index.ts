/*
 * @Author: wangbo
 * @Date: 2024-03-11 14:00:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-27 23:09:45
 * @Description: 注册常量路由、设置切换路由动画、设置路由模式
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'

// 返回一个路由器对象
let router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  //路由切换 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
