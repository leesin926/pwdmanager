<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
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
    async register() {
      try {
        const response = await this.$axios.post('/api/register', {
          username: this.username,
          password: this.password,
        });
        alert(response.data.message);
        this.$router.push('/');
      } catch (error) {
        alert('Registration failed');
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
