<!--
 * @Author: wangbo
 * @Date: 2024-03-11 13:58:12
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-25 01:38:41
 * @Description: https://github.com/wangbo-ship/zhenxuansys
-->
<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar" alt="" class="avatar" />
      <div class="bottom">
        <h3 class="title">{{ getTime() }}好 {{ userStore.username }}</h3>
        <p class="subtitle">{{ appTitle }}</p>
      </div>
    </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="welcome" width="500px" height="250px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '@/utils/time'
//引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
//获取存储用户信息的仓库对象
let userStore = useUserStore()
// 访问环境变量
const appTitle = import.meta.env.VITE_APP_TITLE
</script>

<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }

    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}
.bottoms {
  margin-top: 90px;
  display: flex;
  justify-content: center;
}
</style>
