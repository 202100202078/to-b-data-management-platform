<script setup>
import { articleGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'

const channelList = ref([])
const getChannelList = async () => {
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
}
</script>

<template>
  <el-select>
    <el-option label="新闻" value="101"></el-option>
    <el-option label="豪车" value="102"></el-option>
  </el-select>
</template>
