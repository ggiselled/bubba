<template>
  <div class="layout">
    <header class="header">
      <!-- Agrega aquí el código para mostrar tu logo -->
      <!-- Por ejemplo, <img src="ruta_del_logo" alt="Logo" /> -->
      <slot name="logo"></slot>
    </header>
    <main class="content">
      <div class="centered-content">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style>
/* Estilos del layout */
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.header {}

/* Estilos para centrar el contenido */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centered-content {
  max-width: 600px;
  width: 100%;
}


</style>
