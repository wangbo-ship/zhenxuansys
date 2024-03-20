/*
 * @Author: wangbo
 * @Date: 2024-03-09 18:53:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 21:12:02
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */

//统一管理用户相关接口
import request from '@/utils/request'
import type { loginFormData, loginResponseData, userInfoReponseData } from './type'
// //统一管理mock接口 枚举
// enum API {
//   LOGIN_URL = '/user/login',
//   USERINFO_URL = '/user/info',
// }
// //暴露请求函数
// //登录接口方法
// export const reqLogin = (data: loginForm) => {
//   return request.post<any, loginResponseData>(API.LOGIN_URL, data)
// }
// //获取用户信息
// export const reqUserInfo = () => {
//   return request.get(API.USERINFO_URL)
// }

//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  // LOGIN_URL='http://114.115.179.162:8022/prod-api/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

//登录接口
export const reqLogin = (data: loginFormData) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () => request.get<any, userInfoReponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
