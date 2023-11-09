<script setup>
import { useUserStore } from '@/store/index'
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const userStore = useUserStore()
const imgUrl = ref(userStore.userInfo.user_pic)
</script>

<template>
  <PageContainer title="更换头像">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :auto-upload="false"
    >
      <img v-if="imgUrl" :src="imgUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </PageContainer>
</template>
