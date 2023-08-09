<template>
    <div class="container">
      <div class="carteras">
        <slot name="carteras"></slot>
      </div>
      <div class="modelo-3D">
        <slot name="modelo-3D"></slot>
      </div>
      <div class="colores">
        <slot name="colores"></slot>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; 
  }
  
  .carteras,
  .colores {
    flex: 1;
    width: 25%;
    padding: 10px;
  }
  
  .modelo-3D {
    flex: 2;
    width: 50%;
    padding: 10px;
  }
  </style>
  