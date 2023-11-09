<script setup>
import { useUserStore } from '@/stores/index'
import { ref } from 'vue'
import { Plus, Upload } from '@element-plus/icons-vue'
const userStore = useUserStore()
const imgUrl = ref(userStore.userInfo.user_pic)

const onUploadFile = () => {}
</script>

<template>
  <PageContainer title="更换头像">
    <el-upload
      ref="uploadRef"
      class="avatar-uploader"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="onUploadFile"
    >
      <img v-if="imgUrl" :src="imgUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <br />
    <br />
    <el-button type="primary" :icon="Plus">选择头像</el-button>
    <el-button type="success" :icon="Upload">上传头像</el-button>
  </PageContainer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>
