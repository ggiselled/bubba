<template>
    <div class="container"
      @mousedown="startDrag" 
      @mousemove="dragging" 
      @mouseup="stopDrag"
      @touchstart="startDrag" 
      @touchmove="dragging" 
      @touchend="stopDrag"
    >
    <img v-if="images[currentFrame]" :src="images[currentFrame]" alt="3D product" />
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
});

let isDragging = ref(false);
let currentFrame = ref(0);
let startX = ref(0);

const startDrag = (e) => {
    if (e.button === 0) {
        e.preventDefault();
        isDragging.value = true;
        startX.value = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    }
};

const stopDrag = () => {
    isDragging.value = false;
};

const dragging = (e) => {
    if (e.button === 0) {
        e.preventDefault();
        if (!isDragging.value) return;

        const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const direction = x - startX.value > 0 ? 1 : -1;
        
        let frame = currentFrame.value + direction;
        frame = frame % props.images.length;
        if (frame < 0) frame = props.images.length + frame;

        currentFrame.value = frame;
        startX.value = x;
    }
};
</script>
  
  <style scoped>
  .container {
    cursor: none;
  }
  
  img {
  
    width: 690px
  }
  </style>
  
  
  
  
  
  