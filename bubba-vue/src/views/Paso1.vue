<template>
  <h2>Primera vista: las colecciones</h2>
  <div v-if="collections" v-for="collection in collections" :key="collection.id" @click="selectCollection(collection)">
    <h3>{{ collection.title }}</h3>
    <p>{{ collection.subtitle }}</p>
    <img :src="collection.imageUrl" :alt="collection.title" />
  </div>
  <h2 @click="goToPaso2">Ir a vista Paso2</h2>
</template>

<script setup>
import router from '../router/index.js'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const collections = computed(() => store.state.collections)

const selectCollection = (collection) => {
  store.commit('selectCollection', collection)
  router.push({ path: '/producto' })
}

const goToPaso2 = () => {
  router.push({ path: '/producto' })
}
</script>
