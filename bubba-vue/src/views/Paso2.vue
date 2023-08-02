<template>
    <h2>Segunda vista: cada producto de la colección</h2>
    <h2>3d de cada producto</h2>
  
    <div v-if="selectedCollection" v-for="product in selectedCollection.products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
  
    <h2 @click="goToPaso3">Ir a vista Paso3</h2>
  </template>
  
  <script setup>
  import router from '../router/index.js'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  
  const selectedCollection = computed(() => store.state.selectedCollection)
  
  const goToPaso3 = () => {
    router.push({path: '/encuesta'})
  }
  </script>
