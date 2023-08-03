<template>
  <Layout>
    <div class="layout-paso1"></div>
    <template #title>
      <h1>COLECCIONES</h1>
    </template>
    <div class="paso1-container">
      <div v-if="collections" v-for="collection in collections" :key="collection.id" @click="selectCollection(collection)" class="paso1-content">
        <img :src="collection.imageUrl" :alt="collection.title" />
        <div class="paso1-text">
          <h3>{{ collection.title }}</h3>
          <p>{{ collection.subtitle }}</p>
        </div>
      </div>
      <h2 @click="goToPaso2">Ir a vista Paso2</h2>

    </div>

  </Layout>
</template>

<script setup>
import router from '../router/index.js'
import { computed } from 'vue'
import { useStore } from 'vuex'
import Layout from '../components/Layout.vue';

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

<style scoped>
@import '../assets/style/globals.scss';

.paso1-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 5px;
  margin-top: 70px;
}

.paso1-content img{
  width: 60%;
}


</style>
