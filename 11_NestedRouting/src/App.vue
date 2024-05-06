<script>
export default {

  methods:{
    goToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="container">
    <RouterLink to="/" class="">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <div class="right-corner">
      <button @click="goToHome" >Go To Home</button>
    </div>
  </div>
  <RouterView />
</template>

<style>
  .container {
    display: flex;
    justify-content: space-between; /* Distribute items evenly */
    align-items: center; /* Vertically center items */
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }

  .container a {
    text-decoration: none;
    color: inherit;
    margin-right: 1rem;
  }

  .container a:hover {
    color: #ddd;
  }

  .right-corner {
    margin-left: auto; /* Move the div to the right */
  }

  button {
    padding: 0.5rem 1rem; /* Add padding to the button */
    background-color: #007bff; /* Button background color */
    color: #fff; /* Button text color */
    border: none; /* Remove button border */
    border-radius: 5px; /* Add border radius */
    cursor: pointer; /* Show pointer on hover */
  }

  button:hover {
    background-color: #0056b3; /* Button background color on hover */
  }
</style>
