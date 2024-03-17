<!--
 * @Author: wangbo
 * @Date: 2024-03-13 16:27:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 23:10:31
 * @Description: layout大框架
-->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div
      class="layout_slider"
      :class="{ fold: layOutSettingStore.fold ? true : false }"
    >
      <!-- logo组件 -->
      <Logo></Logo>
      <!-- 菜单滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          :collapse="layOutSettingStore.fold ? true : false"
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
    <div
      class="layout_tabbar"
      :class="{ fold: layOutSettingStore.fold ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 展示区 -->
    <div
      class="layout_main"
      :class="{ fold: layOutSettingStore.fold ? true : false }"
    >
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
import { useRoute } from 'vue-router'
let $route = new useRoute()
//获取用户仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//获取layout设置仓库
import useLayOutSettingStore from '@/store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
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
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        // 解决el-menu右边框问题
        border-right: none;
      }
    }
    // &.fold 表示在当前选择器下，追加一个 .fold 类，形成一个组合选择器 样式后覆盖前
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: whitesmoke;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    // background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
