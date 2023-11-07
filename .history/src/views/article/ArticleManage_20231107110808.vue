<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">发布文章</el-button>
    </template>
    <el-table v-loading="isLoading" :data="articleList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="cate_name" label="分类名称" />
      <el-table-column prop="cate_alias" label="分类别名" />
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            plain
            :icon="Edit"
            circle
            type="primary"
            size="small"
          ></el-button>
          <el-button
            plain
            :icon="Delete"
            circle
            type="danger"
            size="small"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </PageContainer>
</template>
