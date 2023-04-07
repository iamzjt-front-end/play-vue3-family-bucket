<script setup lang="ts">
import { ref } from 'vue';

// import HelloWorld from './components/HelloWorld.vue'
import Rate from './components/Rate.vue';

const score = ref(3);
</script>

<template>
  <!--<HelloWorld />-->
  <h1>您的评分是： {{ score }}</h1>
  <Rate v-model="score"/>
</template>

<style scoped>

</style>
