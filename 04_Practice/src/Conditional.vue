<script>
export default {
  data() {
    return {
      awesome: true,
      isLoggedIn: false, // Assuming login state is managed elsewhere
    };
  },
  methods: {
    toggle() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>

<template>
  <button @click="toggle">Toggle</button>
  <div>
    <h1 v-if="isLoggedIn">You are welcome!</h1>
    <h1 v-else>Go...! and login first</h1>
  </div>
</template>
