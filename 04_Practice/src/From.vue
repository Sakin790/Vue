<script>
export default {
  data() {
    return {
      inputData: "",
    };
  },
};
</script>

<template>
  <div>
    // v-model only work in text model , not radio or checkBok
    <input  v-model ="inputData" placeholder="Enter Text" />
    <h2>input  Value is : {{inputData}} </h2>
  </div>
</template>
