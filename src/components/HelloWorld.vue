<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, enter, exit, toggle } = useFullscreen(document.body);
</script>

<template>
  <h1 @click="toggle">click</h1>
</template>

<style scoped>
</style>
