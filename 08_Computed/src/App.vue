<template>
  <div class="form-container">
    <h1>Contact Form</h1>
    <form @submit.prevent="handleSubmit" class="dark-form">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
        <span v-if="errors.name">Please enter your name.</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
        <span v-if="errors.email">Please enter a valid email address.</span>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" rows="5"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};

     
      if (!this.formData.name) {
        this.errors.name = "Please enter your name.";
      }
      if (!this.validateEmail(this.formData.email)) {
        this.errors.email = "Please enter a valid email address.";
      }

      if (Object.keys(this.errors).length === 0) {

        console.log("Form submitted:", this.formData);
        // You can use a library like Axios to send the data to a server
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },

  created() {
    console.log(this.name);
  },
};
</script>

<style scoped>
.form-container {
  background-color: #222;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.dark-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input,
textarea {
  background-color: #333;
  color: #fff;
  padding: 5px;
  border: 1px solid #444;
  border-radius: 3px;
}

span {
  color: red;
  font-size: 0.8rem;
}

button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
