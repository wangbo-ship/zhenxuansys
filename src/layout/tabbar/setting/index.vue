<template>
  <!-- 操作栏 -->
  <el-button
    type="primary"
    size="default"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    type="primary"
    size="default"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button type="primary" size="default" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" alt="" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link" style="font-size: 16px">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
//引入layout仓库
import useLayOutSettingStore from '../../../store/modules/setting'
//引入user仓库
import useUserStore from '../../../store/modules/user'
//引入路由对象
import { useRouter, useRoute } from 'vue-router'
let layOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()
//刷新按钮回调
const updateRefresh = () => {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}
//全屏按钮回调
const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  let full = document.fullscreenElement
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen()
  }
}
//退出登录回调
const logout = async () => {
  //1.向服务器发送退出登录的接口请求
  //2.前端清除仓库中该用户相关的数据
  //3.跳转回登陆页
  await userStore.userLogout()
  //下次登录时可以重定向到这次退出的页面
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>
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
