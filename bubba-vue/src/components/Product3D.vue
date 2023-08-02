<template>
    <div>Hola soy un producto</div>
    <swiper-container>
        <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Imagen del producto en 3D">
        </swiper-slide>
    </swiper-container>
    
</template>

<script setup>
import { register } from 'swiper/element/bundle';

register();

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

</script>