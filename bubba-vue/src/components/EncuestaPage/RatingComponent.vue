<template>
  <span>
    <!-- div containing the mouseenter and mouseleave event to change the ref. PS: If you want to make it clickable, this should be a button!! -->
    <div
      v-for="(rating, index) in ratings"
      :key="rating.name"
      @mouseenter="hoveredRating = index"
      @mouseleave="hoveredRating = -1"
    >
      {{ rating.name }}
      {{ shouldRatingShow(index) ? 'on' : 'off' }}
    </div>
  </span>

  <!-- Debug output -->
  {{ hoveredRating }}
</template>

<script setup>
    import { ref } from 'vue';
    
    const ratings = [
    {
        name: 'rating1',
        value: 20,
    },
    {
        name: 'rating2',
        value: 40,
    },
    {
        name: 'rating3',
        value: 60,
    },
    ];

    // When hovering, this ref will be changed to the index of the rating you hover over
    const hoveredRating = ref(-1);
    // Function to check if styles/text/... should be changed
    const shouldRatingShow = (index) => hoveredRating.value >= index;
    // Note: This is a naive implementation. You can also check it based on names (e.g. find the index of a rating based on the name and take all before) and so on and so on
</script>