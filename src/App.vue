
<template>
  <!-- <Calendar /> -->
   <PizzaList />
   <Cart />
</template>

<script setup lang="ts">
  import Calendar from './components/calendar/Calendar.vue';
  import PizzaList from './components/carrito/PizzaList.vue'
  import Cart from './components/carrito/Cart.vue';
  import type { Pizza } from './components/carrito/pizza.model';
  import { inject, provide } from 'vue';
  import { PubSub } from './services/pubSub';

  provide('pizzasSub', new PubSub<Pizza>());
</script>
