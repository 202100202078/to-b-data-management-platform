<script setup>
import { ref } from 'vue'
import { articleGetChannelsService } from '@/api/article'
const articleList = ref([])
const getArticleList = async () => {
  const res = await articleGetChannelsService()
  articleList.value = res.data.data
  console.log(articleList.value)
}
getArticleList()
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary">添加分类</el-button>
    </template>
    <el-table :data="articleList" style="width: 100%">
      <el-table-column prop="序号" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
