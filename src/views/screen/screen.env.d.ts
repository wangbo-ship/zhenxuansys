/*
 * @Author: wangbo
 * @Date: 2024-03-14 17:47:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 17:54:39
 * @Description: 解决screen的index中引入找不到声明文件的问题
 */
//已经有一个全局的env.d.ts了 但是screen这部分不生效 依旧爆红找不到声明文件 于是在这里配置了一个局部的
declare module '*.vue' {
    //解决 xxx 找不到声明文件的问题
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }