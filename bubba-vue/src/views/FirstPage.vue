<template>
  <Layout>
    <div class="layout-paso1"></div>
    <template #title>
      <h1 class="title">COLLECTIONS</h1>
    </template>
    <template #content>
      <div class="paso1-container">
        <div v-if="collections" v-for="collection in collections" :key="collection.id" @click="selectCollection(collection)" class="paso1-content">
          <img :src="collection.imageUrl" :alt="collection.title" />
          <div class="paso1-text">
            <h3>{{ collection.title }}</h3>
            <p>{{ collection.subtitle }}</p>
          </div>
        </div>
      </div>
    </template>
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

</script>

<style scoped>
@import '../assets/style/globals.scss';

h1, h2, h3, p{
  font-family: 'GothamMedium';
  font-weight: 200;
}
/* .paso1-content{
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
} */

.paso1-container {
  height: 100vh;
  overflow-y: hidden; /* No permitir el desplazamiento vertical */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; /* Espacia los productos equitativamente */
}

.paso1-content {
  height: calc(100vh / 3); /* Divide la altura total por 3 para cada producto */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.paso1-content img {
  max-width: 100%;
  max-height: 70%; /* Ajusta este valor según la relación de aspecto que desees para las imágenes */
  object-fit: contain;
}


</style>
