<script>
  export default {
    name: "App",
    data() {
      return {
        name: "",
        email: "",
      };
    },
    methods: {
      handleSubmit() {
        this.name = "";
        this.email = "";
      },
    },
  };
</script>


<template>
  <div id="app">
    <h2>Simple Form</h2>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model.lazy="name" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model.lazy="email" />

      <button type="submit">Submit</button>
    </form>
  </div>
  <div>

    <h1>Name : {{name}}</h1>
    <h2>Email : {{email}}</h2>
  </div>
</template>

<style scoped>
  /* Basic form styling */
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
