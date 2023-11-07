<script setup>
import { ref } from 'vue'

const articleList = ref([
  {
    id: 5961,
    title: '新的文章啊',
    pub_date: '2022-07-10 14:53:52.604',
    state: '已发布',
    cate_name: '体育'
  },
  {
    id: 5962,
    title: '新的文章啊',
    pub_date: '2022-07-10 14:54:30.904',
    state: null,
    cate_name: '体育'
  }
])
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary">发布文章</el-button>
    </template>
    <!-- 筛选表单 -->
    <el-form :inline="true">
      <el-form-item label="文章分类">
        <el-select>
          <el-option label="新闻" value="101"></el-option>
          <el-option label="豪车" value="102"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select>
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 主体表格 -->
    <el-table :data="articleList" style="width: 100%">
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column
        prop="cate_name"
        label="分类"
        width="180"
      ></el-table-column>
      <el-table-column prop="pub_date" label="发布时间"></el-table-column>
      <el-table-column prop="state" label="状态" width="100"></el-table-column>
      <el-table-column label="操作" width="100"></el-table-column>
    </el-table>
  </PageContainer>
</template>
