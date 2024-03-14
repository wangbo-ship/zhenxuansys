<template>
  <!-- 操作栏 -->
  <el-button type="primary" size="default" icon="Refresh" circle></el-button>
  <el-button type="primary" size="default" icon="FullScreen" circle></el-button>
  <el-button type="primary" size="default" icon="Setting" circle></el-button>
  <img src="../../../../public/vite.svg" alt="" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link" style="font-size: 16px">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup></script>

<style scoped>
img {
  width: 34px;
  height: 34px;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 30%;
  border: 1px solid gray;
}
</style>
