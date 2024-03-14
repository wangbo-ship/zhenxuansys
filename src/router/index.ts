/*
 * @Author: wangbo
 * @Date: 2024-03-11 14:00:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-12 23:13:08
 * @Description: https://github.com/wangbo-ship/zhenxuansys
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
