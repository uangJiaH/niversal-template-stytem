<template>
  <div class="login-container">
    <el-form :model="loginForm" class="loginfrom">
      <div class="title-container">
        <h2 class="title">用户登录</h2>
        <svg-icon className="svg-language" icon="language"></svg-icon>
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
          :Type="inputType"
          v-model="loginForm.password"
          placeholder="password"
        />
        <span class="svg-pwd" @click="handllePassWordStatus">
          <el-icon>
            <svg-icon
              :icon="inputType === 'password' ? 'eye' : 'eye-open'"
            ></svg-icon>
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
import { reactive, ref } from 'vue'
const loginForm = reactive({
  username: '',
  password: ''
})
const inputType = ref('password')
console.log(loginForm)
const handleLoginSubmit = () => {
  console.log('submit!')
}
const handllePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
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
</style>
