<template>
  <el-card>
    <!-- inline 属性用于设置表单项是否以行内方式显示 -->
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select :disabled="scene == 0 ? false : true" style="width: 240px" v-model="categoryStore.c1Id" @change="handler">
          <!-- opntion中用label展示数据 value为select下拉菜单收集的数据 -->
          <el-option v-for="c1 in categoryStore.c1Arr" :key="c1.id" :label="c1.name" :value="c1.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select :disabled="scene == 0 ? false : true" style="width: 240px" v-model="categoryStore.c2Id" @change="handler1">
          <el-option v-for="c2 in categoryStore.c2Arr" :key="c2.id" :label="c2.name" :value="c2.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select :disabled="scene == 0 ? false : true" style="width: 240px" v-model="categoryStore.c3Id">
          <el-option v-for="c3 in categoryStore.c3Arr" :key="c3.id" :label="c3.name" :value="c3.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
//分类全局组件
import useCategoryStore from '@/store/modules/category'
let categoryStore = useCategoryStore()
//分类全局组件挂在完毕就通知仓库发送请求获取一级分类数据
onMounted(() => {
  getC1()
})
//通知仓库获取一级分类的方法
const getC1 = () => {
  //通知分类仓库发请求获取一级分类的数据
  categoryStore.getC1()
}

//此方法即为一级分类下拉菜单的change事件(选中值的时候会触发,保证一级分类ID有了)
const handler = () => {
  //需要将二级、三级分类的数据清空
  categoryStore.c2Id = ''
  categoryStore.c3Id = ''
  categoryStore.c3Arr = []
  //通知仓库获取二级分类的数据
  categoryStore.getC2()
}
//此方法即为二级分类下拉菜单的change事件(选中值的时候会触发,保证二级分类ID有了)
const handler1 = () => {
  //清理三级分类的数据
  categoryStore.c3Id = ''
  categoryStore.getC3()
}
//接受父组件传递过来scene
defineProps(['scene'])
</script>

<style scoped lang="scss"></style>
