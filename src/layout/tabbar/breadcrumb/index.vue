<template>
  <!-- 收缩图标 -->
  <el-icon style="margin-right: 20px; cursor: pointer" @click="changeIcon">
    <!-- <component> 标签用于动态地渲染不同的组件，这个组件的名称可以由一个动态的 is 属性来确定。这使得在一个地方渲染多个不同的组件成为可能，而不需要在模板中编写大量的条件语句。 -->
    <component :is="layOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-show="item.meta.title" :to="item.path">
      <el-icon style="vertical-align: middle">
        <component v-if="item.meta.icon" :is="item.meta.icon"></component>
        <component v-else is="Menu"></component>
        <!-- 使用默认图标组件 -->
      </el-icon>
      <span style="margin: 0 5px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
//引入layout组件设置仓库
import useLayOutSettingStore from '../../../store/modules/setting'
//引入当前路由 控制面包屑
import { useRoute } from 'vue-router'
let $route = useRoute() // console.log($route.matched)
let layOutSettingStore = useLayOutSettingStore()
// 扩展图标的切换
const changeIcon = () => {
  layOutSettingStore.fold = !layOutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped lang="scss"></style>
