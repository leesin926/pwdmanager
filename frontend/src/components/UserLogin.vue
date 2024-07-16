<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="login-form">
      <h3 class="title">用户登录</h3>

      <el-form-item label="用户名:" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"
                  show-password></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('loginFormRef')" class="login-button">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{validator: validateUsername, trigger: 'blur'}],
        password: [{validator: validatePassword, trigger: 'blur'}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.loginForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async login(data) {
      try {
        const response = await this.$axios.post('/api/login', data);
        alert(response.message);
        if (response.code === 200) {
          let user_id = response.user_id;
          await this.$store.dispatch('setUserId', user_id);
          await this.$router.push('/detail');
        }
      } catch (error) {
        console.log(error);
        alert('Invalid credentials');
      }
    },
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 350px;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.login-button {
  width: 100%;
}
</style>