<script setup>
const goList = () => {}
</script>

<template>
  <div>
    我是App
    <button @click="$router.push('/home')">跳到首页</button>
    <button @click="goList">跳到列表页</button>
  </div>
</template>

<style scoped></style>
