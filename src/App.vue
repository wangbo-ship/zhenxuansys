<!--
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-09 18:33:38
 * @Description: https://github.com/wangbo-ship/zhenxuansys
-->
<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">aaa</el-button>
    <el-button type="primary" size="default" :icon="Edit">aaa</el-button>
    <svg-icon name="home" color="pink" width="100px" height="100px"></svg-icon>
    <Pagination></Pagination>
    <div id="testColor"></div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit } from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import request from '@/utils/request'
onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<style scoped lang="scss">
#testColor {
  width: 100px;
  height: 100px;
  background-color: $base-color;
}
</style>
