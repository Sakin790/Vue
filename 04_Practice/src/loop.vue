<script>
export default {
  data() {
    return {
      cars: ["BMW", "FORD", "AUDI"],
    };
  },
};
</script>

<template>
  <div>
    <h1>Loops</h1>
    <h4 v-for="(car, index) in cars">{{ index }}:{{ car }}</h4>
    i
    <ul>
      <li v-for="car in cars">
        {{ car }}
      </li>
    </ul>
  </div>
</template>
