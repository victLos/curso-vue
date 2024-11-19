<script lang="ts" setup>
import { useCarrito } from './useCarrito';

const price = useCarrito();

</script>

<template>
  <div>Total: {{ price }}</div>
</template>

<style lang="css" scoped></style>

