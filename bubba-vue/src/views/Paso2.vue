<template>
  <Layout>
    <template #title>
      <h1>TU COLECCIÓN</h1>
    </template>
    <div class="product-container">
      <div class="product-content">
        <div class="product-contentProducts" v-if="selectedCollection" v-for="product in selectedCollection.products" :key="product.id" @click="selectProduct(product)">
          <h3>{{ product.name }}</h3>
          <img :src="product.imageUrl" :alt="product.name" />
        </div>
      </div>
      <div class="product-3D">
        <Product3D v-if="selectedProduct" :images="selectedProduct.images" style="width: 150%"/>
      </div>
    </div>

    <h2 @click="goToPaso3">Ir a vista Paso3</h2>
  </Layout>
</template>

<script setup>
import { onMounted } from 'vue';
import router from '../router/index.js'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Product3D from '../components/Product3D.vue';
import Layout from '../components/Layout.vue';

const store = useStore()
const selectedProduct = ref(null)
const selectedCollection = computed(() => store.state.selectedCollection)

const selectProduct = (product) => {
  selectedProduct.value = product
  store.commit('selectProduct', product) // Agrega esta línea para almacenar el producto seleccionado en el store
}

onMounted(() => {
  if (selectedCollection.value && selectedCollection.value.products && selectedCollection.value.products.length > 0) {
    selectProduct(selectedCollection.value.products[0]);
  }
});

const goToPaso3 = () => {
  router.push({path: '/encuesta'})
}
</script>

<style scoped>
.product-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-content{
  display: flex;
  flex-direction: row;
}

.product-contentProducts{
  padding: 5px;
}
.product-contentProducts img{
  width: 100%;
}

</style>