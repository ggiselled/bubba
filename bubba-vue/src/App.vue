<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<router-view/>
</template>

<style lang="scss">
@import '../src/assets/style/globals.scss';
/* Para Chrome y Safari */

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  
}

::-webkit-scrollbar-thumb {
  background: $color-font;
  border-radius: 30%;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Para Internet Explorer y Edge */
body {
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

/* Para Firefox */
body {
  scrollbar-width: thin;
  scrollbar-color: $color-font #f1f1f1;
}
</style>
