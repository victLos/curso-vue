<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import type { Pizza } from "./pizza.model";
import { useCarrito } from "./useCarrito";

const pizzas: Pizza[] = [
  {
    id: "1",
    name: "Margarita",
    price: 11,
  },
  {
    id: "2",
    name: "Carbonara",
    price: 12,
  },
  {
    id: "3",
    name: "Pepperoni",
    price: 10,
  },
];

function addToCart(event: Event) {
  event.stopPropagation();
  const node = (event.composedPath() as HTMLElement[]).find(
    (element: HTMLElement) => {
      return element.dataset && element.dataset.id;
    }
  );
  if (node) {
    const { id } = node.dataset;
    const pizza = pizzas.find((pizza) => pizza.id === id);
    if (pizza) {
      document.dispatchEvent(createEvent(pizza));
    }
  }
}

function createEvent(pizza: any): CustomEvent {
  return new CustomEvent("add-to-cart", {
    bubbles: true,
    composed: true,
    detail: structuredClone(pizza),
  });
}
</script>

<template>
  <div @click="addToCart" class="pizza">
    <div v-for="pizza in pizzas" :key="pizza.id">
      <div>{{ pizza.id }}</div>
      <div>{{ pizza.name }}</div>
      <div>${{ pizza.price }}</div>
      <button :data-id="pizza.id">Añadir al carrito</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.pizza {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
