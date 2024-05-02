<script>
export default {
  data() {
    return {
      message: "Counter App",
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Count is : {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Increment</button>
    <button @click="reset">Increment</button>
  </div>
</template>
