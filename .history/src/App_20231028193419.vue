<script setup>
import { useRoute, useRouter } from 'vue-router'
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
    <el-button @click="$router.push('/home')">跳到首页</el-button>
    <el-button @click="goList">跳到列表页</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </div>
</template>

<style scoped></style>
