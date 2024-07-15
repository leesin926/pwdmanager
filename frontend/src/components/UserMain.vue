<template>
  <div class="main">
    <h2>Main Page</h2>
    <p>Welcome to the password manager!</p>
    <el-button-group>
      <el-button type="primary" @click="() => this.$router.push('/login')">登录</el-button>
      <el-button type="primary" @click="() => this.$router.push('/register')">注册</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
