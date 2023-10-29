<script setup>
import { useRoute, useRouter } from 'vue-router'

const goList = () => {
  const route = useRoute()
  const router = useRouter()
  router.push('/list')
  console.log(route)
  console.log(router)
}
</script>

<template>
  <div>
    我是App
    <button @click="$router.push('/home')">跳到首页</button>
    <button @click="goList">跳到列表页</button>
  </div>
</template>

<style scoped></style>
