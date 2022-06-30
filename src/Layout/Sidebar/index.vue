<template>
  <!-- 左侧 menu -->
  <!-- 如果菜单数据里面没有子菜单数据,则使用el-menu-item渲染
        如果菜单数据里面有子菜单数据,则使用el-sub-menu渲染 -->
  <div>
    <div class="sidebar-title">
      <img src="https://res.lgdsunday.club/default-avatar.jpeg" class="logo" />
      <h1>usian-admin</h1>
    </div>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup>
import sidebarMenu from './SidebarMenu.vue'
</script>
<style lang="scss" scoped>
.sidebar-title {
  text-align: center;
  padding: 15px 0;
  color: #fff;

  .logo {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    vertical-align: middle;
  }
  h1 {
    font-size: 16px;
    display: inline;
    margin-left: 10px;
  }
}
</style>
