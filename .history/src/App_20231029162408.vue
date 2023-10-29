<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import request from '@/utils/request.js'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()

const route = useRoute()
const router = useRouter()

const goList = async () => {
  const res = await request.get('/my/cate/info')
  console.log(res)
  router.push('/list')
  console.log(route)
  console.log(router)
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
