<template>
    <div class="product-content">
      <div
        class="product-contentProducts"
        v-if="selectedCollection"
        v-for="product in selectedCollection.products"
        :key="product.id"
        @click="selectProduct(product)"
      >
        <img :src="product.imageUrl" :alt="product.name" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, emit } from 'vue';
  
  const selectedCollection = ref(null);
  
  const selectProduct = (product) => {
    emit('productSelected', product);
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente si es necesario */
  </style>
  