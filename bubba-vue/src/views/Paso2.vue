<template>
  <Layout :useContainer="false">
    <template #title>
      <h1 v-if="selectedCollection">{{ selectedCollection.title }}</h1>
      <h2 v-if="selectedCollection">{{ selectedCollection.subtitle }}</h2>
      <h2 v-if="selectedProduct">{{selectedProduct.name }}</h2>
    </template>
    <div class="product-container">
      <div class="product-content">
        <div class="product-contentProducts" v-if="selectedCollection" v-for="product in selectedCollection.products" :key="product.id" @click="selectProduct(product)">
          <img :src="product.imageUrl" :alt="product.name" />
        </div>
      </div>
      <div class="product-3D">
        <Product3D v-if="selectedProduct" :images="selectedProductImages"/>
      </div>
    </div>
    <CustomBtn :label="'CONTINUAR'" :onClick="goToPaso3" style="margin-top: -20px;"/>

  </Layout>

  
  <ColorSelector v-if="selectedProduct" :modelValue="selectedColor" :colors="selectedProduct.colors" @update:modelValue="updateSelectedColor" />

</template>

<script setup>
import { onMounted } from 'vue';
import router from '../router/index.js'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Product3D from '../components/Product3D.vue';
import Layout from '../components/Layout.vue';
import CustomBtn from '../components/CustomBtn.vue';
import ColorSelector from '../components/ColorSelector.vue';

const store = useStore()
const selectedProduct = ref(null)
const selectedCollection = computed(() => store.state.selectedCollection)
const selectedColor = computed(() => store.state.selectedColor)

const selectProduct = (product) => {
  selectedProduct.value = product
  store.commit('selectProduct', product)

}

const selectedProductImages = computed(() => {
  if (selectedProduct.value && selectedProduct.value.colorImages && selectedColor.value) {
    return selectedProduct.value.colorImages[selectedColor.value] || [];
  }
  return [];
});

const updateSelectedColor = (color) => {
  store.commit('selectColor', color);
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
@import '../assets/style/globals.scss';

h1, h2{
  font-family: 'GothamMedium';
  font-weight: 100;
}

h2{
  margin-top: -30px;
}

.product-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  overflow-x: hidden;
}

.product-content{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.product-contentProducts{
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-contentProducts img{
  width: 70%;
  margin: 0 auto;
}

.container{
  margin: 0 auto !important;
}

.colorsitos{
  display: flex;
  flex-direction: row;
}

</style>