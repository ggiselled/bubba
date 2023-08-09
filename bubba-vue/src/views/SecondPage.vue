<template>
  <Layout :useContainer="false">
    <template #title>
      <h1 v-if="selectedCollection">{{ selectedCollection.title }}</h1>
      <h2 v-if="selectedCollection">{{ selectedCollection.subtitle }}</h2>
      <h2 v-if="selectedProduct">{{selectedProduct.name }}</h2>
    </template>
    <template #content>
      <LayoutContenido>
          <template #carteras>
            <div class="paso1-container">
              <div 
                v-if="selectedCollection" 
                v-for="product in selectedCollection.products" :key="product.id" @click="selectProduct(product)"
                class="paso1-content"
              >
              <img :src="product.imageUrl" :alt="product.name" />
              </div>
            </div>
          </template>
          <template #modelo-3D>
            <Product3D v-if="selectedProduct" :images="selectedProductImages"/>
          </template>
          <template #colores>
            <ColorSelector v-if="selectedProduct" :modelValue="selectedColor" :colors="selectedProduct.colors" @update:modelValue="updateSelectedColor" />
          </template>
      </LayoutContenido>
    </template>
    <template #footer>
      <CustomBtn :label="'CONTINUAR'" :onClick="goToPaso3" style="margin-top: -20px;"/>
    </template>
  </Layout>
</template>

<script setup>
import { onMounted } from 'vue';
import router from '../router/index.js'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Product3D from '../components/Product3D.vue';
import Layout from '../components/Layout.vue';
import LayoutContenido from '../components/SecondPage/LayoutContenido.vue';
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
    if (selectedProduct.value.colors && selectedProduct.value.colors.length > 0) {
      store.commit('selectColor', selectedProduct.value.colors[0]);
    }
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

}

h1 {
  font-size: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

h2{
  font-size: 1.7rem;
  line-height: 0.5rem;
  font-weight: 100;

}

.product-container{
  display: flex;
  flex-direction: row;
  justify-content: space;
  align-items: center;
  margin-top: 80px;
  overflow-x: hidden;
}

.product-content{
  display: flex;
  flex-direction: column;
  justify-content: space;
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

.product-content {
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

.product-contentProducts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
}

.product-contentProducts {
  margin: 10px;
}

.paso1-content {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.paso1-content img {
  max-width: auto;
  max-height: 100px;
  object-fit: contain;
}

</style>