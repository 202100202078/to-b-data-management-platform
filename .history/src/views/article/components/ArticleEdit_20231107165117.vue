<script setup>
import { ref } from 'vue'

const visibleDrawer = ref(false)

//向外暴露方法open
const open = (obj) => {
  //显示抽屉
  visibleDrawer.value = true
}
</script>

<template>
  <el-drawer v-model="visibleDrawer" title="I am the title" size="50%">
    <span>Hi, there!</span>
  </el-drawer>
</template>
