<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="login">Login</button>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./Firebase/index"
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(this.email, this.password);
        console.log('Logged in user:', userCredential.user);
      } catch (error) {
        this.error = error.message; 
      }
    },
  },
};
</script>

<style scoped>

</style>
