
<template>
  <!-- <Calendar /> -->
   <PizzaList />
   <Cart />
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Calendar from './components/calendar/Calendar.vue';
  import PizzaList from './components/carrito/PizzaList.vue'
import Cart from './components/carrito/Cart.vue';
</script>
