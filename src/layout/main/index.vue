<!--
 * @Author: wangbo
 * @Date: 2024-03-14 20:17:14
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-15 15:40:10
 * @Description: https://github.com/wangbo-ship/zhenxuansys
-->
<template>
  <!-- 路由组件出口位置 实际就是roter-view 只不过加了动画 动画具体在css的fade中 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 这里的Component是固定写法 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayOutSettingStore from '../../store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
//控制当前组件是否销毁重建
let flag = ref(true)
//监听仓库内部数据是否发生变化,如果发生变化，说明用户点击过刷新按钮
watch(() => layOutSettingStore.refsh,() => {
    //点击刷新按钮:路由组件销毁
    flag.value = false
    //响应式数据发生变化 dom更新完毕后nextTick执行 再创建dom
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<!-- 起名字 开发者工具可以更清晰看到对应结构 -->
<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
