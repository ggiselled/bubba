<template>
  <div class="collections">
    <BagCollection
      v-for="collection in collections"
      :key="collection.id"
      :title="collection.title"
      :subtitle="collection.subtitle"
      :imageUrl="collection.imageUrl"
      @select="selectCollection(collection)"
    />
  </div>
  <h2>Primera vista: colecciones</h2>
  <h2 @click="goToPaso2">Ir a vista Paso2</h2>
</template>

<script setup>
import { ref } from 'vue'
import BagCollection from '../components/BagCollection.vue'
import router from '../router/index.js'

const collections = ref([
  { 
    id: 1, 
    title: 'ORIGINALS',
    subtitle: 'LINE', 
    imageUrl: '../../public/Originals/Originals3.jpg',
    products: [
      { id: 'Originals1', name: 'Producto 1', imageUrl: '../../public/Originals/Originals2.jpg' },
      { id: 'Originals2', name: 'Producto 2', imageUrl: '../../public/Originals/Originals1.jpg' },
    ]
  },
  { 
    id: 2, 
    title: 'VICTORIA',
    subtitle: 'LINE', 
    imageUrl: '../../public/Victoria/Victoria2.jpg',
    products: [
      { id: 'Victoria1', name: 'Producto 1', imageUrl: 'url-producto-1' },
      { id: 'Victoria2', name: 'Producto 2', imageUrl: 'url-producto-2' },
      { id: 'Victoria3', name: 'Producto 3', imageUrl: 'url-producto-3' },
    ]
  },
  { 
    id: 3, 
    title: 'FANCY', 
    subtitle: 'LINE',
    imageUrl: '../../public/Fancy/Fancy1.jpg',
    products: [
      { id: 'Fancy1', name: 'Producto 1', imageUrl: 'url-producto-1' },
      { id: 'Fancy2', name: 'Producto 2', imageUrl: 'url-producto-2' },
      { id: 'Fancy3', name: 'Producto 3', imageUrl: 'url-producto-3' },
    ]
  },

])

const selectCollection = (collection) => {
  router.push({ 
    name: 'producto', 
    params: { products: collection.products } 
  })
}



///////////////////////////

const goToPaso2 = () => {
    router.push({path: '/producto'})
}
</script>
