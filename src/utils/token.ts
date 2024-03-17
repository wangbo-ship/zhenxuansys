/*
 * @Author: wangbo
 * @Date: 2024-03-12 18:57:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 15:18:34
 * @Description: 封装本地存储与读取数据的方法
 */
//封装本地存储、读取、删除TOKEN的方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}

export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
