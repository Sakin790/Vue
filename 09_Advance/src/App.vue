<script>
import Header from "./View/Header.vue";

export default {
  data() {
    return {
      age: 3,
      score: 100,
      life: 90,
    };
  },
  components: {
    Header,
  },
  methods: {
    incrementScore() {
      console.log("Increment Score");
      this.score++;
    },
    decrementLife() {
      console.log("Decrementing Life.....");
      this.life--;
    },
  },
};
</script>

<template>
  <div>
    <Header />
    <h1>Advance Vue {{ age }}</h1>
    <h2>{{ score }}</h2>
    <h2>{{ life }}</h2>
    <button @click="incrementScore">In-Score</button>
    <button @click="decrementLife">De-Life</button>
  </div>
</template>
