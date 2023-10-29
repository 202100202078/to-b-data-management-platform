<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/user.js'
const userStore = useUserStore()

const route = useRoute()
const router = useRouter()

const goList = () => {
  router.push('/list')
  console.log(route)
  console.log(router)
}
</script>

<template>
  <div>
    我是App
    <test-com></test-com>
    <el-button @click="$router.push('/home')">跳到首页</el-button>
    <el-button @click="goList">跳到列表页</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    {{ userStore.token }}
    <el-button @click="userStore.setToken('kasldjkalsjdlkasj')">登录</el-button>
    <el-button>退出</el-button>
  </div>
</template>

<style scoped></style>
