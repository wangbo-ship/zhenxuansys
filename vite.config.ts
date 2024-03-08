/*
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-08 15:11:58
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    }
})