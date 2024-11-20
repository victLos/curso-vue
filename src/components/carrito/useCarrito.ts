import { ref, computed, onMounted, onUnmounted, inject } from 'vue';
import type { Pizza } from './pizza.model';
import { PubSub } from '../../services/pubSub';

export function useCarrito() {
  const pizzas = ref<Pizza[]>([]);

  const publisher = inject('pizzasSub') as PubSub<Pizza>;

  const price = computed(() => {
    return pizzas.value.reduce((a: number, b: Pizza) => {
      return a + b.price;
    }, 0);
  });

  // function addPizza(event: Event): void {
  //   event.stopPropagation();
  //   const e: CustomEvent = event as CustomEvent;
  //   const pizza = e.detail as Pizza;
  //   pizzas.value.push(pizza);
  // }
  function addPizza(pizza: Pizza): void {
    pizzas.value.push(pizza);
  }

  onMounted(() => {
    // document.addEventListener('add-to-cart', addPizza);
    publisher.on('add-to-cart', addPizza);
  });

  onUnmounted(() => {
    // document.removeEventListener('add-to-cart', addPizza);
    publisher.unsubscribe('add-to-cart', addPizza);
  });
  return price;
}