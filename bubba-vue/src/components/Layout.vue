<template>
  <div class="layout">
    <header class="header">
      <img class="logo" src="../../public/Logo/logo-bubba_600x800px_2.jpg" alt="Logo">
      <div class="logo-line"></div>
      <!-- <slot name="logo"></slot> -->
    </header>
    <main class="content">
      <div class="centered-content">
        <slot></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.layout {
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}

.header {
  text-align: center;
}

.logo {
  max-width: 33.33%;
  width: 100%;
  height: auto;
  align-self: center;
  margin: 0 auto;
}
.logo-line {
  max-width: 33%;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  margin: 0 auto;
  background-color: black;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centered-content {
  max-width: 600px;
  width: 100%;
}

.footer {
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Gotham Rounded Bold Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
  text-align: center;
}
</style>
