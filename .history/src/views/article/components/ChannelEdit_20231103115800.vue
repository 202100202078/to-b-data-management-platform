<script setup>
import { ref } from 'vue'
import {
  articleAddChannelService,
  articleEditChannelService
} from '@/api/article'
const dialogVisible = ref(false)
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})

const rules = {
  cate_name: [
    { required: true, message: '请输入内容', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '内容必须为1-10位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入内容', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '内容必须为1-15位的字符',
      trigger: 'blur'
    }
  ]
}

const open = (obj) => {
  // console.log(obj)
  //根据obj的内容进行弹层渲染 空对象则是添加文章分类 反之为编辑文章分类
  dialogVisible.value = true
  //回显数据
  formModel.value = { ...obj }
}

const formRef = ref()
const onSubmit = () => {
  //先对表单进行提交前的校验
  await formRef.value.vali
}

defineExpose({
  open
})
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑分类' : '添加分类'"
    width="30%"
  >
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input
          v-model="formModel.cate_name"
          placeholder="请输入分类名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input
          v-model="formModel.cate_alias"
          placeholder="请输入分类别名"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
