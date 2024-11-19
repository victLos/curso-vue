<template>
  <div class="calendar-container">
    <CalendarTimer />
    <CalendarGrid></CalendarGrid>
  </div>
</template>

<style lang="css" scoped>
  .calendar-container {
    width: fit-content;
    display: flex;
    flex-direction: column;
  }
</style>

<script lang="ts" setup>
  import CalendarGrid from './CalendarGrid.vue';
  import CalendarTimer from './CalendarTimer.vue';
</script>
