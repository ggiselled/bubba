<template>
    <h2>Segunda vista: cada producto de la colección</h2>
    <h2 @click="goToPaso3">Ir a vista Paso3</h2>
</template>

<script setup>
import router from '../router/index.js'
const goToPaso3 = () => {
    router.push({path: '/encuesta'})
}
</script>