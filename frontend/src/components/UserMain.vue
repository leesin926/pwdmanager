<template>
  <el-container>
    <el-header height="auto" class="el-header">
      <h1 class="h1">Welcome to Password Manager</h1>
    </el-header>
    <el-main>
      <div class="home-content">
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :span="8">
            <el-button type="primary" size="large" @click="navigateToLogin">登录</el-button>
          </el-col>
          <el-col :span="8">
            <el-button type="success" size="large" @click="navigateToRegister">注册</el-button>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped lang="css">
.el-header {
  background-color: #409EFF;
  color: white;
  text-align: center;
  font-size: 24px;
  padding: 40px; /* Increased padding for height */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-content {
  text-align: center;
  margin-top: 100px;
}

.el-button {
  width: 100%;
  margin-top: 20px;
}
</style>
