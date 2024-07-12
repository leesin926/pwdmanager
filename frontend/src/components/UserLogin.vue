<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/api/login', {
          username: this.username,
          password: this.password,
        });
        alert(response.data.message);
        if (response.data.message === 'Login successful') {
          this.$router.push('/main');
        }
      } catch (error) {
        alert('Invalid credentials');
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
