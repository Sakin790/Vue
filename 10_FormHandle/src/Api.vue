<script>
  import axios from "axios";

  export default {
    data() {
      return {
        todo: {},
        error: null,
      };
    },
    methods: {
      async getHealth() {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/6"
          );
          this.todo = response.data;
        } catch (error) {
          console.error("Error fetching todo:", error);
          this.error = error;
        }
      },
    },
  };
</script>

<template>
  <div>
    <h1>API</h1>
    <button @click="getHealth">Get Todo</button>
    <div v-if="todo">
      <h2>Todo</h2>
      <p>User ID: {{ todo.userId }}</p>
      <p>ID: {{ todo.id }}</p>
      <p>Title: {{ todo.title }}</p>
      <p>Completed: {{ todo.completed ? "Yes" : "No" }}</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
    <div v-else><p>No todo found or unexpected response.</p></div>
  </div>
</template>
