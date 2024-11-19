import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Pizza } from './pizza.model';

export function useCarrito() {
  const pizzas = ref<Pizza[]>([]);

  const price = computed(() => {
    return pizzas.value.reduce((a: number, b: Pizza) => {
      return a + b.price;
    }, 0);
  });

  function addPizza(event: Event): void {
    event.stopPropagation();
    const e: CustomEvent = event as CustomEvent;
    const pizza = e.detail as Pizza;
    pizzas.value.push(pizza);
  }

  onMounted(() => {
    document.addEventListener('add-to-cart', addPizza)
  });

  onUnmounted(() => {
    document.removeEventListener('add-to-cart', addPizza);
  });
  return price;
}