<template>
    <h2>Segunda vista: cada producto de la colección</h2>

    <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <img :src="product.imageUrl" :alt="product.name" />
    </div>

    <h2 @click="goToPaso3">Ir a vista Paso3</h2>
</template>

<script setup>
import router from '../router/index.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const products = route.params.products
const goToPaso3 = () => {
    router.push({path: '/encuesta'})
}
</script>