/*
 * @Author: wangbo
 * @Date: 2024-03-09 18:56:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-12 18:37:01
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
//登录接口携带参数类型
export interface loginForm {
  username: string
  password: string
}
//登录接口返回数据类型
interface dataType {
  token?: string
  message?: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

//
