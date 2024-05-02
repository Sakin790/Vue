<script>
export default {
  data() {
    return {
      awesome: true,
      isLoggedIn: false, 
      score : 100,
      // score:50<100
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

  <div>
    <h1 v-if="isLoggedIn">You are welcome!</h1>
    <h1 v-else>Go...! and login first</h1>
    <h4 v-if="score<50">Score is More Than 50</h4>
    <h4 v-if="score>50">Score is Less Than 50</h4>
    <button @click="toggle">Toggle</button>
  </div>
</template>
