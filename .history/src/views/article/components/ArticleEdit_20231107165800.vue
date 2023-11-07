<script setup>
import { ref } from 'vue'

const visibleDrawer = ref(false)

//向外暴露方法open
const open = (obj) => {
  //显示抽屉
  visibleDrawer.value = true
  //如果当前obj是空，那么是新增文章
  //反之为编辑文章
  if (obj.id) {
  } else {
  }
}
defineExpose({
  open
})
</script>

<template>
  <el-drawer v-model="visibleDrawer" title="I am the title" size="50%">
    <span>Hi, there!</span>
  </el-drawer>
</template>
