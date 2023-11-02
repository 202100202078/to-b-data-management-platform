<script setup>
  defineProps({
    title:{
      
    }
  })
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>文章管理</span>
        <div class="extra">
          <el-button type="primary"> 添加分类 </el-button>
        </div>
      </div>
    </template>
    <div>内容</div>
    <div>内容</div>
    <div>内容</div>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  box-sizing: border-box;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
