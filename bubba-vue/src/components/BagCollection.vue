<template>
  <div class="bag-collection" @click="select">
    <img :src="imageUrl" :alt="title" />
    <h2>{{ title }}</h2>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  imageUrl: String
})

const emit = defineEmits(['select'])

const select = () => {
  emit('select')
}
</script>
