<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { useUserStore } from '@/stores/index'
import { ref } from 'vue'

const userStore = useUserStore()
// console.log(userStore.userInfo)
const { id, username, nickname, email } = userStore.userInfo
const userInfo = ref({ username, nickname, email, id })

const rules = {
  nickname: [
    { required: true, message: '请输入你的昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称必须是2-10位的非空字符串',
      trigger: 'blur'
    }
  ],
  email:[
    {}
  ]
}
</script>

<template>
  <PageContainer title="基本资料">
    <el-form :model="userInfo" :rules="rules" label-width="100px" size="large">
      <el-form-item label="登录名称">
        <el-input disabled :placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="userInfo.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input v-model="userInfo.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交修改</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
