<script setup>
import { ref } from 'vue'

defineProps({

  data :{
    name : String,
    age : Number,
    gender : String,

  }

})


</script>

<template>

  <h1>{{age}}</h1>
</template>
