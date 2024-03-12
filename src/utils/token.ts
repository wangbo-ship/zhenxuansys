/*
 * @Author: wangbo
 * @Date: 2024-03-12 18:57:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-12 18:57:14
 * @Description: 封装本地存储与读取数据的方法
 */
//封装本地存储与读取数据的方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
