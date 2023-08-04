<template>
    <div @click="handleClick" class="button-container">
      <h3>{{ label }}</h3>
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
  padding: .5em .75em;
  background: #d6d6d6;
  border-radius: 6px;
  user-select: none;
  text-align: center;
  width: 30%;
  margin: 0 auto;
  font-family: 'Gotham Rounded Bold Regular';
  font-size: 15px;
  font-weight: 100;
  

  &:hover {
    background: #e6e6e6;
  }

  &:active {
    background: #c6c6c6;
  }
}
</style>