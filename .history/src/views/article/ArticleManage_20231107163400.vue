<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import EditSelect from './components/EditSelect.vue'
import { articleGetArticleListService } from '@/api/article'
import { formatTime } from '@/utils/format.js'

const handleEdit = (row) => {
  console.log(row)
}

const handleDelete = (row) => {
  console.log(row)
}

//请求参数的存储
const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '', //默认文章分类下拉菜单的选择
  state: ''
})

import request from '@/utils/request.js'

const testFn = async () => {
  var formdata = new FormData()
  formdata.append('title', '文章标题')
  formdata.append('cate_id', '1284')
  formdata.append('content', '示例内容')
  formdata.append('cover_img', '1')
  formdata.append('state', '已发布')
  await request.post('/my/article/add', formdata)
}
const articleList = ref([])
const totalCount = ref(0)
const getArticleList = async () => {
  const res = await articleGetArticleListService(params.value)
  articleList.value = res.data.data
  totalCount.value = res.data.total
  console.log(articleList.value)
}
getArticleList()
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" @click="testFn">发布文章</el-button>
    </template>
    <!-- 筛选表单 -->
    <el-form :inline="true">
      <el-form-item label="文章分类">
        <EditSelect v-model="params.cate_id"></EditSelect>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="params.state">
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
      <el-table-column prop="pub_date" label="发布时间">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
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
