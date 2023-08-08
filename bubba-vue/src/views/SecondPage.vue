<template>
  <Layout :useContainer="false">
    <template #title>
      <h1 v-if="selectedCollection">{{ selectedCollection.title }}</h1>
      <h2 v-if="selectedCollection">{{ selectedCollection.subtitle }}</h2>
      <h2 v-if="selectedProduct">{{selectedProduct.name }}</h2>
    </template>
    <template #content>
      <LayoutContenido>
        <!-- <div class="product-container"> -->
          <!-- CARTERAS -->
          <!-- <template #carteras>
            <div class="product-content">
              <div 
                class="product-contentProducts" 
                v-if="selectedCollection" 
                v-for="product in selectedCollection.products" 
                :key="product.id" 
                @click="selectProduct(product)"
              >
                <img :src="product.imageUrl" :alt="product.name" />
              </div>
            </div> 
          </template> -->
          <template #carteras>
            <div class="product-content">
              <div 
                class="product-contentProducts" 
                v-if="selectedCollection" 
                v-for="product in selectedCollection.products" 
                :key="product.id" 
                @click="selectProduct(product)"
              >
                <img :src="product.imageUrl" :alt="product.name" />
              </div>
            </div> 
            <!-- <div class="product-content">
              <div class="product-contentProducts" v-if="selectedCollection">
                <div
                  v-for="product in selectedCollection.products"
                  :key="product.id"
                  @click="selectProduct(product)"
                >
                  <img :src="product.imageUrl" :alt="product.name" />
                </div>
              </div>
            </div> -->
          </template>
          <template #modelo-3D>

                <Product3D v-if="selectedProduct" :images="selectedProduct.images"/>

          </template>
        <!-- </div> -->
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
import ProductItem from '../components/SecondPage/ProductItem.vue';
import Product3D from '../components/Product3D.vue';
import Layout from '../components/Layout.vue';
import CustomBtn from '../components/CustomBtn.vue';
import LayoutContenido from '../components/SecondPage/LayoutContenido.vue';
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
} else {
  console.log("error en onMounted");
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

h1 {
  font-size: 2.5rem;
}

h2{
  font-size: 1.5rem;
  line-height: 0.5rem;

}

.product-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  overflow-x: hidden;
}

.product-content{
  display: flex;
  flex-direction: column;
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

.product-content {
  display: flex;
  justify-content: space-between; /* Para alinear los objetos a los extremos */
  align-items: center;
}

.product-contentProducts-container {
  display: flex;
  flex-wrap: wrap; /* Para asegurar que los elementos se envuelvan en una nueva línea si no caben en una sola */
  justify-content: center;
  width: 70%; /* Ajusta el ancho del contenedor según tus necesidades */
}

.product-contentProducts {
  margin: 10px; /* Ajusta el margen entre los objetos según tus necesidades */
}

</style>