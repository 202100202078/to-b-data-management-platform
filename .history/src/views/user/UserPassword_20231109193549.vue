<script setup>
import { ref } from 'vue'

const formModel = ref({
  oldpassword: '',
  newpassword: '',
  repassword: ''
})

const rules = {
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的非空字符' }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value != formModel.value.oldpassword) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
</script>

<template>
  <PageContainer title="重置密码">
    <el-form>
      <el-form-item label="原密码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">修改密码</el-button>
        <el-button>重置密码</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
