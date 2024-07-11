<template>
  <div>
    <h1>Welcome to the Password Manager</h1>
    <p>Please <router-link to="/login">Login</router-link> or <router-link to="/register">Register</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
