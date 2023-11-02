<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import { articleGetChannelsService } from '@/api/article'
const articleList = ref([])
const isLoading = ref(false)
const getArticleList = async () => {
  isLoading.value = true
  const res = await articleGetChannelsService()
  articleList.value = res.data.data
  isLoading.value = false
}
getArticleList()

const dialogVisible = ref(false)
const handleEdit = ($index, row) => {
  console.log($index, row)
}
const handleDelete = ($index, row) => {
  console.log($index, row)
}
const onAddChannel = () => {
  dialogVisible.value = true
}
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="isLoading" :data="articleList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="cate_name" label="分类名称" />
      <el-table-column prop="cate_alias" label="分类别名" />
      <el-table-column label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button
            plain
            :icon="Edit"
            circle
            type="primary"
            size="small"
            @click="handleEdit($index, row)"
          ></el-button>
          <el-button
            plain
            :icon="Delete"
            circle
            type="danger"
            size="small"
            @click="handleDelete($index, row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>

    <el-dialog v-model="dialogVisible" title="弹层" width="30%">
      <span>表单</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
