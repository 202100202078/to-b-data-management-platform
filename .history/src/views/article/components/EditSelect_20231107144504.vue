<script setup>
import { articleGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'

const channelList = ref([])
const getChannelList = async () => {
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
  console.log(channelList.value)
}
getChannelList()

defineProps({
  cateId: {
    required: true,
    type: Number
  }
})
</script>

<template>
  <el-select >
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>
