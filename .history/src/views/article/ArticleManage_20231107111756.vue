<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary">发布文章</el-button>
    </template>
    <!-- 筛选表单 -->
    <el-form>
      <el-form-item label="文章分类">
        <el-select>
          <el-option label="新闻" value="101"></el-option>
          <el-option label="豪车" value="102"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select>
          <el-option label="新闻" value="101"></el-option>
          <el-option label="豪车" value="102"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item></el-form-item>
    </el-form>
    <!-- 主体表格 -->
  </PageContainer>
</template>
