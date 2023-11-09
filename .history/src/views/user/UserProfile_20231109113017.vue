<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { useUserStore } from '@/stores/index'
import { ref } from 'vue'

const userStore = useUserStore()
// console.log(userStore.userInfo)
const { id, username, nickname, email } = userStore.userInfo
const userInfo = ref({ username, nickname, email, id })
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
