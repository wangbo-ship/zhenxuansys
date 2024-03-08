<!--
 * @Author: wangbo
 * @Date: 2024-03-08 19:15:56
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-08 19:31:30
 * @Description: 封装svg 其余组件要用 只需import后传递参数过来即可
-->
<template>
    <svg :style="{ width, height }">
        <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
    <!-- 在其他组件中要用到svg 原本需要写成：<svg><use xlink:href="#icon-vue" fill="skyblue"></use></svg> -->
    <!-- 现在只需import后传参：<svg-icon name="home" color="pink" width="100px" height="100px"></svg-icon> -->
</template>

<script setup lang="ts">
//接收父组件传递过来的承诺书
defineProps({
    //xlink:href属性值前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    //提供使用的图标名字
    name: String,
    //接受父组件传递颜色
    color: {
        type: String,
        default: ''
    },
    //接受父组件传递过来的图标的宽度
    width: {
        type: String,
        default: '16px'
    },
    //接受父组件传递过来的图标的高度
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style scoped>

</style>
