<template>
  <div>
    <div v-for="color in colors" :key="color" @click="selectColor(color)">
      <div :style="{backgroundColor: color, border: modelValue === color ? '2px solid black' : 'none' }"></div>
    </div>
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
    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      
    }
  </style>
  