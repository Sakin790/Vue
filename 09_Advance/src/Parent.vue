<script>
import Header from "./View/Header.vue";
export default {
  data() {
    return {
      name: "Jane",
      propsAge:18,
      student :["jen","thor","beggi"]
    };
  },
  components: {
    Header,
  },
};
</script>
<template>
  <div>
    <h1>Parent Components</h1>
    <Header :message="name" :age="propsAge" :students="student" />
  </div>
</template>
