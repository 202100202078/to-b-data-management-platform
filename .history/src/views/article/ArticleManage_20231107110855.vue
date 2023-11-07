<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary">发布文章</el-button>
    </template>
    <el-table style="width: 100%">
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </PageContainer>
</template>
