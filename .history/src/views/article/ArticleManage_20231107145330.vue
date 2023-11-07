<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import EditSelect from './components/EditSelect.vue'
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
    state: '草稿',
    cate_name: '体育'
  }
])

const handleEdit = (row) => {
  console.log(row)
}

const handleDelete = (row) => {
  console.log(row)
}

//默认文章分类下拉菜单的选择
const params = ref({
  pagenum:1,
  pagesize:''
})
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary">发布文章</el-button>
    </template>
    <!-- 筛选表单 -->
    <el-form :inline="true">
      <el-form-item label="文章分类">
        <EditSelect v-model="cateId"></EditSelect>
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
      <el-table-column prop="title" label="文章标题" width="300">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="cate_name"
        label="分类"
        width="300"
      ></el-table-column>
      <el-table-column prop="pub_date" label="发布时间"></el-table-column>
      <el-table-column prop="state" label="状态" width="120"></el-table-column>
      <el-table-column label="操作" width="120">
        <template #default="{ row }">
          <el-button
            plain
            :icon="Edit"
            circle
            type="primary"
            size="small"
            @click="handleEdit(row)"
          ></el-button>
          <el-button
            plain
            :icon="Delete"
            circle
            type="danger"
            size="small"
            @click="handleDelete(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </PageContainer>
</template>
