<script setup>
import { ref } from 'vue'
import { articleGetChannelsService } from '@/api/article'
const articleList = ref([])
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary">添加分类</el-button>
    </template>
    内容
  </PageContainer>
</template>

<style lang="scss" scoped></style>
