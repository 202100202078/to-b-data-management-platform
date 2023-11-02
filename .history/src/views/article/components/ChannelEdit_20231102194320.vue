<el-dialog v-model="dialogVisible" title="弹层" width="30%">
  <span>表单</span>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">
        确认
      </el-button>
    </span>
  </template>
</el-dialog>
