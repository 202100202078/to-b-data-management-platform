<script setup>
import { articleGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'

const channelList = ref([])
const getChannelList = async () => {
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
}
getChannelList()
</script>

<template>
  <el-select>
    <el-option
      v-for="channel in channelList"
      label="新闻"
      value="101"
    ></el-option>
  </el-select>
</template>
