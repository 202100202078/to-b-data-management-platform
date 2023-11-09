<script setup>
import { ref } from 'vue'
import { userUpdatePasswordService } from '@/api/user.js'
const formRef = ref()

const formModel = ref({
  oldpassword: '',
  newpassword: '',
  repassword: ''
})

const rules = {
  oldpassword: [
    { required: true, message: '请输入旧密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的非空字符' }
  ],
  newpassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的非空字符' }
  ],
  repassword: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value != formModel.value.newpassword) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const updatePassword = () => {}

const resetPassword = () => {}
</script>

<template>
  <PageContainer title="重置密码">
    <el-form :model="formModel" :rules="rules" size="large" ref="formRef">
      <el-form-item label="原密码" prop="oldpassword">
        <el-input v-model="formModel.oldpassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpassword">
        <el-input v-model="formModel.newpassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="repassword">
        <el-input v-model="formModel.repassword" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updatePassword">修改密码</el-button>
        <el-button @click="resetPassword">重置密码</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
