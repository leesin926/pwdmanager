<template>
  <div class="list-with-input-container">
    <!-- Panel with input fields -->
    <el-card class="input-panel">
      <template #header>
        <div class="card-header">
          <span>输入区域{{ userId }}</span>
        </div>
      </template>
      <el-form label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="description" placeholder="请输入描述"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="category" placeholder="请输入类别"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- List table -->
    <el-card class="list-table">
      <template #header>
        <div class="card-header">
          <span>数据列表</span>
        </div>
      </template>
      <el-table :data="listData" style="width: 100%">
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="category" label="类别"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 0,
      name: '',
      description: '',
      category: '',
      listData: []
    };
  },
  created() {
    this.userId = this.$store.state.userId
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.get(`/api/passwords/${this.userId}`).then(response => {
        this.listData = response.data;
      });
    }
  }
};
</script>

<style scoped>
.list-with-input-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-panel,
.list-table {
  margin: auto;
  width: calc(100% - 20px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header span {
  font-size: 20px;
  font-weight: bold;
}
</style>