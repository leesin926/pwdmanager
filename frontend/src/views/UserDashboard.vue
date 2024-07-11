<template>
  <div>
    <h1>Dashboard</h1>
    <form @submit.prevent="addPassword">
      <input v-model="site" placeholder="Site" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Add Password</button>
    </form>
    <h2>Your Passwords</h2>
    <ul>
      <li v-for="pwd in passwords" :key="pwd.id">{{ pwd.site }}: {{ pwd.password }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserDashboard',
  data() {
    return {
      site: '',
      password: '',
      passwords: []
    };
  },
  methods: {
    async addPassword() {
      try {
        const userId = localStorage.getItem('user_id');
        const response = await axios.post('http://localhost:5000/passwords', {
          user_id: userId,
          site: this.site,
          password: this.password
        });
        alert(response.data.message);
        this.fetchPasswords(); // Refresh the passwords list
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPasswords() {
      try {
        const userId = localStorage.getItem('user_id');
        const response = await axios.get(`http://localhost:5000/passwords/${userId}`);
        this.passwords = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      this.fetchPasswords();
    } else {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
