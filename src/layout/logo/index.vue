<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import setting from '../../setting'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center; //竖直方向对齐
  padding: 20px;
  img {
    width: 35px;
    height: 35px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
    font-weight: 600;
  }
}
</style>
