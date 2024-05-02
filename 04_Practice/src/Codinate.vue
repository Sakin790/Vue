<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    getCoord(event) {
      // Corrected typo in method name
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
};
</script>

<template>
  <div class="box" v-on:mousemove.prevent="getCoord">box</div>
  <p>X Coordinate is {{ x }}</p>
  <p>Y Coordinate is {{ y }}</p>
</template>

<style>
.box {
  background-color: red;
  height: 500px;
  width: 500px;
}
</style>
