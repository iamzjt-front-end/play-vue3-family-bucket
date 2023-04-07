<script setup>
import { computed, ref } from 'vue';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: Number,
  theme: {
    type: String,
    default: 'orange'
  }
});

const themeObj = {
  'black': '#000',
  'white': '#fff',
  'red': '#f5222d',
  'orange': '#fa541c',
  'yellow': '#fadb14',
  'green': '#73d13d',
  'blue': '#40a9ff'
};

const fontStyle = computed(() => {
  return `color: ${ themeObj[props.theme] }`;
});

// 评分宽度
let width = ref(props.modelValue);

function mouseOver(i) {
  width.value = i;
}

function mouseOut() {
  width.value = props.modelValue;
}

const fontWidth = computed(() => `width: ${ width.value / 5 * 100 }%`);

function onRate(num) {
  emits('update:modelValue', num);
}
</script>

<template>
  <div class="container" :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">🤍</span>
    </div>
    <span class="hollow" :style="fontWidth">
      <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">🧡</span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 330px;
  height: 72px;
  font-size: 48px;
}

.rate {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
}
</style>
