<script setup>
import { ref } from 'vue'

const visibleDrawer = ref(false)
</script>

<template>
  <el-drawer v-model="visibleDrawer" title="I am the title" size="50%">
    <span>Hi, there!</span>
  </el-drawer>
</template>
