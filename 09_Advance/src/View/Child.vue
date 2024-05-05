<template>
  <div>
    <h1>Header...</h1>
    <p>{{ message || "No props passed" }}</p>
    <h1>{{ age }}</h1>
    <ul>
      <li v-for="stu in students" :key="stu">
        {{ stu }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    //Expecting message
    props: {
      message: {
        type: String,
        required: true, 
      },
      age: {
        type: Number,
      },
      students: {
        type: Array,
      },
    },
  };
</script>
