<template>
  <div class="register-container">
    <el-form :model="registerForm" :rules="rules" ref="registerFormRef" class="register-form">
      <h3 class="title">用户注册</h3>

      <el-form-item prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item prop="email">
        <el-input v-model="registerForm.email" placeholder="请输入邮箱地址"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"
                  autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="confirmPassword">
        <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请再次输入密码"
                  autocomplete="off"></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('registerFormRef')" class="register-button">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          {validator: this.validatePasswordMatch, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register(this.registerForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async register(data) {
      try {
        const response = await this.$axios.post('/api/register', data);
        alert(response.data.message);
        this.$router.push('/');
      } catch (error) {
        alert('Registration failed');
      }
    },
    validatePasswordMatch(rule, value, callback) {
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入的密码不一致'));
      } else {
        callback();
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
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

.register-button {
  width: 100%;
}
</style>