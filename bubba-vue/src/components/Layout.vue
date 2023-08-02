<template>
    <div>
      <header>
        <h1>{{ titulo }}</h1>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LayOut',
    props: {
      titulo: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  div {
    padding: 20px;
  }
  
  header {
    text-align: center;
    background-color: #f0f0f0;
    padding: 10px;
  }
  </style>
  