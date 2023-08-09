<template>
    <div @click="handleClick" class="button-container">
      <p>{{ label }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  })
  
  const handleClick = () => {
    props.onClick()
  }
  </script>

<style scoped lang="scss">

@import '../assets/style/globals.scss';
.button-container{

  &:hover {
    background: #e6e6e6;
  }

  &:active {
    background: #c6c6c6;
  }

}

div p {
    display: inline-block;
    border-bottom: 1px solid black;
}
</style>