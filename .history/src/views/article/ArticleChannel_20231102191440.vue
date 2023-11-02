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
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="cate_name" label="分类名称" />
      <el-table-column prop="cate_alias" label="分类别名" />
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
