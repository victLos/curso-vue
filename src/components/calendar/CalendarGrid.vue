<template>
  <div class="calendar-grid">
    <div v-for="label in dayLabels" :key="label" class="day-label">{{ label }}</div>
    <CalendarDay v-for="day in days" :day="day" :key="day" @day-clicked="handleDayClick"/>
  </div>
  <!-- <div class="calendar-grid" @click="handleCalendarClick">
    <div v-for="label in dayLabels" :key="label" class="day-label">{{ label }}</div>
    <CalendarDay v-for="day in days" :day="day" :key="day"/>
  </div> -->
</template>

<style lang="css" scoped>
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
  }
  .day-label {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
  }
</style>

<script lang="ts" setup>
import CalendarDay from './CalendarDay.vue';
  function getDays(): number[] {
    const days = [];
    for (let i=1; i<=31; i++) {
      days.push(i);
    }
    return days;
  }
  const days = getDays();

  const dayLabels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  function handleCalendarClick(event: Event) {
    event.stopPropagation();
    if (event.target && (event.target as HTMLElement).dataset.day) {
      console.log((event.target as HTMLElement).dataset.day);
    }
  }

  function handleDayClick(value: number) {
    console.log(value);
  }

</script>