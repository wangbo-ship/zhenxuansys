<!--
 * @Author: wangbo
 * @Date: 2024-03-13 16:27:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 12:50:08
 * @Description: layout大框架
-->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <!-- 头部导航 -->
    <div class="layout_tabbar">123</div>
    <!-- 展示区 -->
    <div class="layout_main">
      <h1 style="height: 10000px">aa</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  height: 100vh;
  width: 100%;
  background-color: $base-menu-color;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: cyan;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
