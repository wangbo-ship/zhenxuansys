<!--
 * @Author: wangbo
 * @Date: 2024-03-14 22:39:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-25 11:25:20
 * @Description: https://github.com/wangbo-ship/zhenxuansys
-->
<template>
    <!-- 操作栏 -->
    <el-button type="primary" size="default" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button type="primary" size="default" icon="FullScreen" circle @click="fullScreen"></el-button>
    <!-- <el-button type="primary" size="default" icon="Setting" circle></el-button> -->
    <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
      <!-- 表单元素 -->
      <el-form>
        <el-form-item label="主题颜色">
          <!-- :teleported="false使得元素不会离开其原始位置 解决取色板鼠标悬浮即消失的问题-->
          <el-color-picker @change="setColor" :teleported="false" v-model="color" size="small" show-alpha :predefine="predefineColors" />
        </el-form-item>
        <el-form-item label="暗黑模式">
          <el-switch @change="changeDark" v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt active-icon="MoonNight" inactive-icon="Sunny" />
        </el-form-item>
      </el-form>
      <template #reference>
        <el-button type="primary" size="default" icon="Setting" circle></el-button>
      </template>
    </el-popover>
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
import { ref } from 'vue'
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
//收集开关的数据
let dark = ref<boolean>(false)
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

//颜色组件组件的数据
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

//switch开关的chang事件进行暗黑模式的切换
const changeDark = () => {
  //获取HTML根节点
  let html = document.documentElement
  //判断HTML标签是否有类名dark
  dark.value ? (html.className = 'dark') : (html.className = '')
}

//主题颜色的设置
const setColor = () => {
  //通知js修改根节点的样式对象的属性与属性值
  const html = document.documentElement
  console.log(html)
  html.style.setProperty('--el-color-primary', color.value)
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
