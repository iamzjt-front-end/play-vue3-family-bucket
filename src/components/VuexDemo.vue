<script setup>
import { useStore } from '../mini/mini-vuex';
import { computed } from 'vue';

const store = useStore();
const count = computed(() => store.state.count);

function add() {
  store.commit('add');
}

function asyncAdd() {
  store.dispatch('addAsync');
}
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="add">add</button>
  <button @click="asyncAdd">asyncAdd</button>
</template>
