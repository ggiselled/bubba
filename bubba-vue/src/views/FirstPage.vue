<template>
  <Layout>
    <template #title>
      <h1 class="title">COLLECTIONS</h1>
    </template>
    <template #content>
      <div class="paso1-container">
        <div 
          v-if="collections" 
          v-for="collection in collections" 
          :key="collection.id" 
          @click="selectCollection(collection)" 
          class="paso1-content"
        >
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
h3{
  font-size: 1.7rem;
  line-height: 0.5rem;
  font-weight: 100;
  margin-bottom: 0;
}
p{
  font-size: 1rem;
}
/* .paso1-container {
  height: 100%; 
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
} */

.paso1-content {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.paso1-content img {
  max-width: auto;
  max-height: 200px;
  object-fit: contain;
}


</style>
