<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})

const open = (obj) => {
  console.log(obj)
  //根据obj的内容进行弹层渲染 空对象则是添加文章分类 反之为编辑文章分类
  dialogVisible.value = true
}

defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogVisible" title="弹层" width="30%">
    <el-form :model="formModel" label-width="100px" >
      <el-form-item label="分类名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="分类别名">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
