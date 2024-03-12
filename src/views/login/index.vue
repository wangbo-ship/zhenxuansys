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
        >
          <h1>Welcome</h1>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              @keyup.enter="login()"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
              @keyup.enter="login()"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="login_btn"
              @click="login()"
              :loading="loading"
            >
              登录
            </el-button>
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
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
//user仓库
let userStore = useUserStore()
//router
let $router = useRouter()
//收集账号密码
let loginForm = reactive({ username: 'admin', password: '111111' })
//按钮加载变量
let loading = ref(false)
//登录请求
const login = async () => {
  loading.value = true
  try {
    //登陆成功
    //这里是那边的promise 所以也可以.then
    await userStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
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
