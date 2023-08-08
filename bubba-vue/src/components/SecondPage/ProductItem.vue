<template>
    <div class="product-contentProducts" @click="selectProduct(product)">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
</template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const product = defineProps(['product']);
  const selectedProduct = ref(null);
  
  const selectProduct = () => {
    selectedProduct.value = product;
    // Puedes seguir utilizando la función selectProduct aquí si lo necesitas
  };
  </script>
  
  <style scoped>
  .product-contentProducts {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .product-contentProducts img {
    width: 70%;
    margin: 0 auto;
  }
  </style>
  