<template>
  <div class="todo-app">
    <h1>My To-Do List</h1>
    <input type="text" v-model="newTask" placeholder="Add a new task" />
    <button @click="addTask">Add</button>
    <ul>
      <ToDoItem v-for="task in tasks" :key="task.id" :task="task.text" :completed="task.completed" @remove="removeTask(task.id)" />
    </ul>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";

export default {
  components: {
    ToDoItem,
  },
  data() {
    return {
      newTask: "",
      tasks: [
        { id: 1, text: "Learn Vue 3", completed: false },
        { id: 2, text: "Build a mini-project", completed: true },
      ],
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({ id: Date.now(), text: this.newTask, completed: false });
        this.newTask = ""; // Clear input field after adding task
      }
    },
    removeTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.todo-app {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ddd;
  width: 250px;

}