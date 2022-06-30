<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      class="loginfrom"
      ref="LoginFormref"
      :rules="loginrules"
    >
      <div class="title-container">
        <h2 class="title">用户登录</h2>
        <el-tooltip content="国际化" placement="bottom" effect="light">
          <svg-icon className="svg-language" icon="language"></svg-icon>
        </el-tooltip>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="user"></svg-icon>
          </el-icon>
        </span>
        <el-input v-model="loginForm.username" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input
          :type="inputType ? 'text' : 'password'"
          v-model="loginForm.password"
          placeholder="password"
        />
        <span class="svg-pwd" @click="inputType = !inputType">
          <el-icon>
            <svg-icon :icon="inputType ? 'eye-open' : 'eye'"></svg-icon>
          </el-icon>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleLoginSubmit()"
          class="loginbutton"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import util from '../../utils/util'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { validatePassword } from './rule'
import { setTimeStamp } from '../../utils/auth'
import md5 from 'md5'
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
const loginrules = reactive({
  username: [
    {
      required: true,
      message: '用户名为必填项',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})
console.log(loginrules)
const LoginFormref = ref()
// const handleLoginSubmit = async() => {
//   Loginfrom.value.validate((valid) => {
//     if (!valid) return
//     if (valid) {
//       const newRoleForm = util.DeepCopy(loginForm)

//       newRoleForm.password = md5(newRoleForm.password)

//       store.dispatch('user/login', newRoleForm)
//       router.push({ name: 'layout' })
//     } else {
//       console.log('error')
//     }
//   })
// }

const handleLoginSubmit = async () => {
  if (!LoginFormref.value) return
  await LoginFormref.value.validate(async (valid) => {
    if (valid) {
      const newLoginForm = util.DeepCopy(loginForm)
      newLoginForm.password = md5(newLoginForm.password)

      const response = await store.dispatch('user/login', newLoginForm)
      setTimeStamp()
      if (response.token) router.push('/')
    }
  })
}
const inputType = ref(false)
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  height: 100%;
  background-color: $bg;
  .loginfrom {
    width: 520px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 200px;
    overflow: hidden;
    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
      }
      ::v-deep .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }

      .el-input__wrapper {
        display: inline-block;
        height: 37px;
        width: 80%;
        background: none !important;
        box-shadow: none !important;
      }
      .loginbutton {
        width: 100%;
      }
    }
  }
}
::v-deep .el-form-item__content {
  flex-wrap: nowrap !important;
}
::v-deep .svg-pwd {
  margin-right: 20px;
}
</style>
