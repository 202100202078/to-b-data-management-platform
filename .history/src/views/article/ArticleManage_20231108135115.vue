<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import EditSelect from './components/EditSelect.vue'
import ArticleEdit from './components/ArticleEdit.vue'
import { articleGetArticleListService } from '@/api/article'
import { formatTime } from '@/utils/format.js'
//加载中
const isLoading = ref(true)

//编辑文章
const handleEdit = (row) => {
  ArticleEditRef.value.open(row)
}
//删除文章
const handleDelete = (row) => {
  console.log(row)
}

const ArticleEditRef = ref()
//新增文章
const onPublishArticle = () => {
  ArticleEditRef.value.open({})
}

//请求参数的存储
const params = ref({
  pagenum: 1, //当前页
  pagesize: 5, //当前生效的每页条数
  cate_id: '', //默认文章分类下拉菜单的选择
  state: ''
})

const handleSizeChange = (size) => {
  console.log('每页条数', size)
}

const handleCurrentChange = (page) => {
  console.log('当前在第几页', page)
}

const articleList = ref([])
const totalCount = ref(0)
const getArticleList = async () => {
  const res = await articleGetArticleListService(params.value)
  articleList.value = res.data.data
  totalCount.value = res.data.total
  // console.log(articleList.value)
  isLoading.value = false
}
//文章表格数据的获取
getArticleList()
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" @click="onPublishArticle">发布文章</el-button>
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
    <el-table :data="articleList" style="width: 100%" v-loading="isLoading">
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
    <!-- 分页区域 -->
    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[2, 3, 5, 10]"
      :background="true"
      layout="jumper,total, sizes, prev, pager, next"
      :total="totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <!-- 抽屉 -->
    <ArticleEdit ref="ArticleEditRef"></ArticleEdit>
  </PageContainer>
</template>
