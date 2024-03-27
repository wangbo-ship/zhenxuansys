<template>
  <div class="login_container">
    <el-row>
      <!-- :xs 设置水平小于768时的比例 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :style="{
            boxShadow: `var(${getCssVarName('light')})`,
          }"
          :model="loginForm"
          ref="loginForms"
          :rules="rules"
        >
          <h1>Welcome</h1>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" @keyup.enter="login()"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password @keyup.enter="login()"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="default" class="login_btn" @click="login()" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time'
//user仓库
let userStore = useUserStore()
//router和route
let $router = useRouter()
let $route = useRoute()
//收集账号密码
let loginForm = reactive({ username: 'admin', password: '111111' })
//按钮加载变量
let loading = ref(false)
//获取表单组件el-form
let loginForms = ref()
//登录请求
const login = async () => {
  //保证全部表单相校验通过再发请求
  // validate方法接收一个回调函数 或者 返回一个promise
  // 通过校验则返回成功promis 否则返回失败promise
  await loginForms.value.validate()
  //登录按钮加载效果:开始加载
  loading.value = true
  try {
    //登陆成功
    //这里是那边的promise 所以也可以.then
    await userStore.userLogin(loginForm)
    //判断有无query参数的重定向
    let redirect:any = $route.query.redirect
    //有redirect往redirect跳 无则跳首页
    $router.push({ path: redirect || '/' })
    ElNotification({
      type: 'success',
      message: `${getTime()}好`,
    })
  } catch (error) {
    loading.value = false
    //登陆失败
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

//自定义校验规则函数
const validatorUserName = (_rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    //可以写成正则校验if(/^\d{5,10}$/.test(value))
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
//这里的rule前加下划线 表示无用参数_rule
const validatorPassword = (_rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

//定义表单校验需要配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { required: true, trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { required: true, trigger: 'change', validator: validatorPassword },
  ],
}
// form盒子阴影
const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/mybackground.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  width: 70%;
  top: 25vh;
  left: 15%;
  //   background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: skyblue;
    font-size: 40px;
    margin: 20px 0;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
