<script setup>
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <PageContainer title="基本资料">
    <el-form>
      <el-form-item label="登录名称">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交修改</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
