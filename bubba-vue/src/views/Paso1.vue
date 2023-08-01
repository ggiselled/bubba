<template>
  <!-- <div class="collections">
    <BagCollection
      v-for="collection in collections"
      :key="collection.id"
      :title="collection.title"
      :imageUrl="collection.imageUrl"
      @select="selectCollection(collection)"
    />
  </div> -->
  <h2>Primera vista: colecciones</h2>
  <h2 @click="goToPaso2">Ir a vista Paso2</h2>
</template>

<script setup>
// import { ref } from 'vue'
// import BagCollection from '../components/BagCollection.vue'
import router from '../router/index.js'

// const collections = ref([
//   { 
//     id: 1, 
//     title: 'Mochila Original', 
//     imageUrl: 'url-de-la-imagen-1',
//     products: [
//       { id: 'prod1', name: 'Producto 1', imageUrl: 'url-producto-1' },
//       { id: 'prod2', name: 'Producto 2', imageUrl: 'url-producto-2' },
//       { id: 'prod3', name: 'Producto 3', imageUrl: 'url-producto-3' },
//     ]
//   },

// ])

// const selectCollection = (collection) => {
//   router.push({ name: 'producto', params: { collection: JSON.stringify(collection) } })
// }



///////////////////////////

const goToPaso2 = () => {
    router.push({path: '/producto'})
}
</script>
