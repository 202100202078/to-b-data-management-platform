<script setup>
import { ref } from 'vue'
import EditSelect from './EditSelect.vue'

const visibleDrawer = ref(false)

const defaultForm = ref({
  title: '',
  cate_id: '',
  content: '',
  cover_img: '', //file类型
  state: ''
})

const formModel = ref({
  ...defaultForm
})

//向外暴露方法open
const open = (obj) => {
  //显示抽屉
  visibleDrawer.value = true
  //如果当前obj是空，那么是新增文章
  //反之为编辑文章
  if (obj.id) {
    //基于row.id发送请求，获取编辑对应的详情数据进行回显(因为row数据不足以回显)
    console.log('回显数据')
  } else {
    //要先清空表单
    formModel.value = { ...defaultForm }
    console.log('添加')
  }
}
defineExpose({
  open
})
</script>

<template>
  <el-drawer
    v-model="visibleDrawer"
    :title="formModel.id ? '编辑文章' : '发布文章'"
    size="50%"
  >
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input
          v-model="formModel.title"
          placeholder="请输入文章标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <!-- 下拉菜单 -->
        <EditSelect v-model="formModel.cate_id" width="100%"></EditSelect>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img"> 封面 </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <!-- 富文本编辑器 -->
        编辑器
      </el-form-item>
      <el-form-item>
        <!-- 按钮 -->
        <el-button type="primary">发布</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
