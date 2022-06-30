<template>
  <div>
    <el-menu
      active-text-color="#fff"
      background-color="#304156"
      default-active=""
      text-color="#bfcbd9"
      router
      unique-opened
    >
      <sidebar-menu-item
        :data="item"
        v-for="(item, index) in data"
        :key="index"
      ></sidebar-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import sidebarMenuItem from './SidebarMenuItem.vue'
const data = reactive([
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    },
    children: []
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      }
    ]
  }
])
</script>

<style lang="scss" scoped></style>
