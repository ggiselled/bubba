<template>
  <h2>Segunda vista: cada producto de la colección</h2>
  <h2>3d de cada producto</h2>

  <div v-if="selectedCollection" v-for="product in selectedCollection.products" :key="product.id" @click="selectProduct(product)">
    <h3>{{ product.name }}</h3>
    <img :src="product.imageUrl" :alt="product.name" />
  </div>

  <div>
    <Product3D v-if="selectedProduct" :images="selectedProduct.images"/>
  </div>

  <h2 @click="goToPaso3">Ir a vista Paso3</h2>
</template>

<script setup>
import router from '../router/index.js'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Product3D from '../components/Product3D.vue';

const store = useStore()
const selectedProduct = ref(null)
const selectedCollection = computed(() => store.state.selectedCollection)
const selectProduct = (product) => {
  selectedProduct.value = product
  store.commit('selectProduct', product) // Agrega esta línea para almacenar el producto seleccionado en el store
}

const goToPaso3 = () => {
  router.push({path: '/encuesta'})
}
</script>
