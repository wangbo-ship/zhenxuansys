<!--
 * @Author: wangbo
 * @Date: 2024-03-14 21:42:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 23:50:51
 * @Description: 头部导航-包含面包屑
-->
<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  //   background-image: linear-gradient(to right, rgb(249, 246, 246), rgb(244, 237, 237), rgb(251, 237, 237));
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 0 6px rgba(0, 0, 0, 0.1);
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
    padding: 20px;
  }
}
</style>
