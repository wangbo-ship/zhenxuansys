<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">aaa</el-button>
    <svg-icon name="home" color="pink" width="100px" height="100px"></svg-icon>
    <div id="testColor"></div>
  </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
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
