<template>
    
    <div class="rating">
      <input v-for="star in stars" :key="star" :id="'rating-' + star" type="radio" :name="name" :value="star" v-model="selectedRating" class="rating-input"/>
      <label v-for="star in stars" :key="star" :for="'rating-' + star" class="rating-star" @mouseover="hoverStar(star)" @mouseout="resetHoverStar" @click="submitRating">
        <svg :class="{ 
                'filled': star <= selectedRating,
                'hovered': star <= hoverStarRating
            }" 
            xmlns="http://www.w3.org/2000/svg"
            width="36.15839mm"
            height="34.38908mm"
            viewBox="0 0 36.15839 34.38908"
            fill="currentColor">
          <g transform="translate(-11.727255,-59.095782)">
         <path
            d="m 29.806452,62.520781 3.49885,10.768894 H 44.62841 l -9.16058,6.655506 3.499202,10.768894 -9.16058,-6.655506 -9.16058,6.655506 3.499202,-10.768894 -9.16058,-6.655506 h 11.323108 z"
            class="starStyle" />
            </g>
        </svg>
      </label>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { initializeApp } from 'firebase/app';
  import { getFirestore, collection, addDoc } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDaSi7bzSWStbSlemsCSrzvQzww1qUkIQU",
    authDomain: "bubba-bags.firebaseapp.com",
    projectId: "bubba-bags",
    storageBucket: "bubba-bags.appspot.com",
    messagingSenderId: "678646944186",
    appId: "1:678646944186:web:f9203f4b443081fbd10d83",
    measurementId: "G-BR6QW7KMCQ"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export default {
    name: 'RatingComponent',
    props: {
      name: {
        type: String,
        required: true,
      },
      maxRating: {
        type: Number,
        default: 5,
      },
      initialRating: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const selectedRating = ref(props.initialRating);
      const hoverStarRating = ref(0);
  
      const stars = Array.from({ length: props.maxRating }, (_, index) => index + 1);
  
      const hoverStar = (star) => {
        hoverStarRating.value = star;
      };
  
      const resetHoverStar = () => {
        hoverStarRating.value = 0;
      };
  
      const submitRating = async () => {
        try {
          const ratingData = {
            rating: hoverStarRating.value,
          };
          const docRef = await addDoc(collection(db, 'ratings'), ratingData);
          console.log('Rating document with', hoverStarRating.value ,'stars. Written with ID:', docRef.id);
        } catch (error) {
          console.error('Error adding rating document:', error);
        }
      };
  
      return {
        selectedRating,
        hoverStarRating,
        stars,
        hoverStar,
        resetHoverStar,
        submitRating,
      };
    },
  };
  </script>
  
  <style scoped>
  .starStyle{
    fill:none;
    stroke:#252525;
    stroke-width:2.11667;
    stroke-linecap:butt;
    stroke-linejoin:miter;
    stroke-miterlimit:10;
    stroke-dasharray:none;
    stroke-opacity:1
  }
  .rating-star:hover .hovered .starStyle{
    fill:#252525;
    stroke:#252525;
  }

  .rating-star:hover ~ .rating-star .hovered .starStyle{
    fill:#252525;
    stroke:#252525;
  }
  .rating {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    border: solid 0px #252525;
    border-radius: 30px;
    padding: 10px;
  }
  
  .rating-input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  
  .rating-star {
    cursor: pointer;
  }
  
  .rating-star svg {
    width: 2rem;
    height: 2rem;
  }
  
  .rating-star .filled .starStyle{
    fill: #252525;
  }
  
  .rating-star .hovered .starStyle{
    fill: #252525;
  }
  </style>
  