<template>
  <PageContainer title="更换头像">
    <el-upload class="avatar-uploader" :show-file-list="false">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </PageContainer>
</template>
