<template>
    <li class="todo-item">
      <input type="checkbox" v-model="completed" />
      <span :class="{ completed }">{{ task }}</span>
      <button @click="$emit('remove')">Remove</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      task: String,
      completed: Boolean,
    },
    methods: {
      // No methods needed in this simple component
    },
  };
  </script>
  
  <style scoped>
  .todo-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .todo-item input {
    margin-right: 10px;
  }
  
  .todo-item span {
    cursor: pointer;
    text-decoration: none;
  }
  
  .todo-item span.completed {
    text-decoration: line-through;
    color: #ccc;
  }
  </style>
  