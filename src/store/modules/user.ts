/*
 * @Author: wangbo
 * @Date: 2024-03-12 11:36:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-27 23:22:24
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
//用户相关的小仓库
import { defineStore } from 'pinia'
//引入登录的api
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user/index'
//引入数据类型
import type { loginFormData, loginResponseData, userInfoReponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入utils中存储数据的方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由
import { constantRoute, asnycRoute, anyRoute } from '@/router/routes'
//引入深拷贝方法
//@ts-ignore
import cloneDeep from 'lodash/cloneDeep'
import router from '@/router'

//用于过滤当前用户需要展示的异步路由的方法
function filterAsyncRoute(asnycRoute: any, routes: any) {
  return asnycRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        //硅谷333账号:product\trademark\attr\sku
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

//创建小仓库
let useUserStore = defineStore('User', {
  //存储
  state: (): UserState => {
    return {
      // token: localStorage.getItem('TOKEN'),
      token: GET_TOKEN(),
      //路由表
      menuRoutes: constantRoute, //type.ts中定义了对应的路由对象的类型
      username: '',
      avatar: '',
      //存储当前用户是否包含某一个按钮
      buttons: [],
    }
  },
  //异步 逻辑
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //调用用户登录的api
      let result: loginResponseData = await reqLogin(data)
      //成功--存token
      if (result.code == 200) {
        //仓库存一下
        this.token = result.data as string
        //本地持久化存储一份
        // localStorage.setItem('TOKEN', (result.data.token as string))
        SET_TOKEN(result.data as string)
        //能保证当前async函数返回一个成功promise
        return 'ok'
        // 因为在 async 函数中使用 return 关键字返回一个值时，
        // 这个值会被自动包装在一个已解决（fulfilled）的 Promise 中。
      } else {
        // 目的是在异步操作中遇到错误时，将错误信息包装为被拒绝的Promise对象，
        // 并将其传递给异步操作的调用者，以便更容易地捕获和处理错误。
        return Promise.reject(new Error(result.message))
      }
    },

    //获取用户信息的方法
    async userInfo() {
      //获取用户信息进行存储仓库当中[用户头像、名字]
      const result: userInfoReponseData = await reqUserInfo()
      //如果获取用户信息成功，存储一下用户信息
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        this.buttons = result.data.buttons
        //计算当前用户需要展示的异步路由
        const userAsyncRoute = filterAsyncRoute(cloneDeep(asnycRoute), result.data.routes)
        //菜单需要的数据整理完毕
        this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
        //目前路由器管理的只有常量路由:用户计算完毕异步路由、任意路由动态追加
        ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    //退出登录的方法
    async userLogout() {
      //退出登录请求
      const result: any = await reqLogout()
      if (result.code == 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  //计算属性
  getters: {},
})
//暴露
export default useUserStore
