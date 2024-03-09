<!--
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-08 23:48:04
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
</script>

<style scoped lang="scss">
#testColor {
  width: 100px;
  height: 100px;
  background-color: $base-color;
}
</style>
