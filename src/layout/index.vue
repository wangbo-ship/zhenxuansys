<!--
 * @Author: wangbo
 * @Date: 2024-03-13 16:27:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 21:46:30
 * @Description: layout大框架
-->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <!-- logo组件 -->
      <Logo></Logo>
      <!-- 菜单滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          background-color="rgb(52, 56, 60)"
          text-color="white"
          :default-active="$route.path"
          active-text-color="#ffd04b"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 头部导航 -->
    <div class="layout_tabbar">
      <Tabbar></Tabbar>
    </div>
    <!-- 展示区 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
//引入子组件
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
//高亮用当前路由显示 route获取当前路由信息 :default-active="$route.path"刷新时依旧停留在当前路由
import {useRoute} from 'vue-router'
let $route = new useRoute()
//获取用户仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  height: 100vh;
  width: 100%;
  background-color: $base-menu-color;
  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        // 解决el-menu右边框问题
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: whitesmoke;
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
