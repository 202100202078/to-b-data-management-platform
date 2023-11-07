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
  <el-drawer v-model="visibleDrawer" title="I am the title" size="50%">
    <el-form :model="formModel">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 下拉菜单 -->
      </el-form-item>
      <el-form-item>
        <!-- 富文本编辑器 -->
      </el-form-item>
      <el-form-item>
        <!-- 按钮 -->
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
