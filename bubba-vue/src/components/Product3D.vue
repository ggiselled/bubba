<template>
  <div class="container"
    @mousedown="startMouseDrag" 
    @mousemove="mouseDragging" 
    @mouseup="stopMouseDrag"
    @touchstart="startTouchDrag" 
    @touchmove="touchDragging" 
    @touchend="stopTouchDrag"
  >
  <img v-if="images[currentFrame]" :src="images[currentFrame]" alt="3D product" @dragstart.prevent="preventImageDrag" />
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


const preventImageDrag = (event) => {
    event.preventDefault();
}

// Mouse events
const startMouseDrag = (e) => {
  if (e.button === 0) {
      isDragging.value = true;
      startX.value = e.clientX;
  }
};

const mouseDragging = (e) => {
  if (e.button === 0 && isDragging.value) {
      const x = e.clientX;
      updateFrame(x);
      startX.value = x;
  }
};

const stopMouseDrag = () => {
  isDragging.value = false;
};

// Touch events
const startTouchDrag = (e) => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
};

const touchDragging = (e) => {
  if (isDragging.value) {
      const x = e.touches[0].clientX;
      updateFrame(x);
      startX.value = x;
  }
};

const stopTouchDrag = () => {
  isDragging.value = false;
};

const updateFrame = (x) => {
  const direction = x - startX.value > 0 ? 1 : -1;
  
  let frame = currentFrame.value + direction;
  frame = frame % props.images.length;
  if (frame < 0) frame = props.images.length + frame;

  currentFrame.value = frame;
};

</script>
  
  <style scoped>

  
  img {
  
    width: 690px
  }
  </style>
  
  
  
  
  
  