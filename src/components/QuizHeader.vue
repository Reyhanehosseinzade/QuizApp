<script setup>
import { defineProps } from "vue";
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<template>
  <header>
    <h4>Question {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{width:barPercentage}"></div>
    </div>
  </header>
</template>

<style scoped>
h4 {
  border-bottom: 1px solid #aeaeae;
  font-weight: 600;
  font-size: 1.5rem;
  color: cornflowerblue;
}
.bar {
  width: 300px;
  margin: 10px 0;
  height: 45px;
  border: 2px solid #f6df38;
  border-radius: 5px;
}
.completion {
  height: 100%;
  width: 0%;
  background-color: #f6df38;
}
</style>
