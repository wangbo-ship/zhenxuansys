/*
 * @Author: wangbo
 * @Date: 2024-03-09 18:53:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-11 13:39:49
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */

//统一管理用户相关接口
import request from '@/utils/request'
import type { loginForm, loginResponseData } from './type'
//统一管理接口 枚举
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
//暴露请求函数
//登录接口方法
export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
//获取用户信息
export const reqUserInfo = () => {
  return request.get(API.USERINFO_URL)
}
