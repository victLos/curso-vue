<template>
  <div class="timer">
    {{ time }}
  </div>
</template>

<style lang="css" scoped>
  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    font-size: 2rem;
  }
</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const time = ref(getTime(new Date()));

let timer: number;

onMounted(() => {
  timer = setInterval(() => {
    time.value = getTime(new Date());
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

function getTime(date: Date) {
  let options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat("es-ES", options).format(date);
}
</script>
