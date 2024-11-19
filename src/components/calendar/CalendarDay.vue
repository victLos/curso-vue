<template>
  <!-- <div class="dayCell" :data-day="props.day">
    {{ props.day }}
  </div> -->
  <div class="dayCell" @click="$emit('dayClicked', props.day)">
    {{ props.day }}
  </div>
</template>

<style lang="css" scope>
  .dayCell {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightslategray;
    color: whitesmoke;
  }

  .dayCell:hover {
    background: white;
    color: gray;
  }
</style>

<script lang="ts" setup>
  const props = defineProps({
    day: {
      type: Number
    }
  });

  const emit = defineEmits(['dayClicked'])

  function dayClick(): void {
    emit('dayClicked', props.day);
  }
</script>