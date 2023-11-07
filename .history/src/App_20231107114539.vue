<script setup></script>

<template>
  <div>
    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </el-config-provider>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
