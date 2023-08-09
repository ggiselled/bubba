<template>

    <div v-for="color in colors" :key="color" @click="selectColor(color)" class="container">
      <div :style="{backgroundColor: color, border: modelValue === color ?  `2px solid ${color}` : 'none' }" class="color"></div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Definir las propiedades y eventos que el componente espera
const { colors, modelValue } = defineProps(['colors', 'modelValue']);
const emit = defineEmits();

// Método para manejar la selección de color y emitir el valor seleccionado
const selectColor = (color) => {
  emit('update:modelValue', color);
}
</script>

  
  <style scoped>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 65px;
    border: white 5px solid;
  }
  .color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

  }

  .color img {
    max-width: auto;
    max-height: 100px;
    object-fit: contain;
  }
    /* div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      
    } */
  </style>
  