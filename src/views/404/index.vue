<template>
  <div class="not-found">
    <router-link to="/" class="btn">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
  // 页面组件的逻辑和功能
})
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../../assets/images/error_images/404.png');
  background-repeat: no-repeat; /* 禁止背景图重复 */
  background-position: center; /* 将背景图水平垂直居中 */
}
.btn {
  margin-top: 39vh;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
