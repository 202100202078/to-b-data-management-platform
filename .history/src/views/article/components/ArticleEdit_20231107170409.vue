<script setup>
import { ref } from 'vue'

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
    <el-form>
      <el-form-item>
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 下拉菜单 -->
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
