<template>
   <div class="layout" :class="{ 'container': useContainer }">
    <header class="header">
      <a href="/">
        <img class="logo" src="../../public/Logo/logo-bubba_600x800px_2.jpg" alt="Logo">
      </a>
      <div class="logo-line"></div>
      <!-- <slot name="logo"></slot> -->
      <slot name="title"></slot>
    </header>
    <main class="content">
      <div class="centered-content">
        <slot name="content"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  useContainer: {
    type: Boolean,
    default: true
  }
})

const { useContainer } = toRefs(props)
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  max-height: 1208px;
  min-height: 1208px;
  max-width: 679px;
  min-width: 679px;
}

.container {
  margin:  auto;
  overflow: auto;
}

.header {
  height: 20%;
  text-align: center;
}

.logo {
  max-width: 33.33%;
  width: 100%;
  height: auto;
  align-self: center;
  margin: 0 auto;
  z-index: 1;
}
.logo-line {
  max-width: 33%;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  margin: 0 auto;
  background-color: black;
  z-index: 2;
  position: relative;
  top: -2rem;
}
.content {
    max-height: 100vh;
    overflow-y: auto; /* Esto permite el desplazamiento si el contenido es más alto que el contenedor */
  }
/* .content {
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.centered-content {
  width: 100%;
} */

.footer {
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Gotham Rounded Bold Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
  text-align: center;
  height: 10%;
}
</style>

