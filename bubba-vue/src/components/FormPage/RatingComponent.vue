<!-- <template>
    
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
            stroke-linejoin="round"
            fill="currentColor">
          <g transform="translate(-11.727255,-59.095782)">
         <path
            d="m 29.806452,62.520781 3.49885,10.768894 H 44.62841 l -9.16058,6.655506 3.499202,10.768894 -9.16058,-6.655506 -9.16058,6.655506 3.499202,-10.768894 -9.16058,-6.655506 h 11.323108 z"
            class="starStyle" />
            </g>
        </svg>
      </label>
    </div>
  </template> -->
  <template>
    <div class="rating">

      <input
        v-for="star in stars"
        :key="star"
        :id="'rating-' + star"
        type="radio"
        :name="name"
        :value="star"
        v-model="selectedRating"
        class="rating-input"
      />
      <label
        v-for="star in stars"
        :key="star"
        :for="'rating-' + star"
        class="rating-star"
        @mouseover="hoverStar(star)"
        @mouseout="resetHoverStar"
        @click="submitRating(star)"
      >
        <svg
          :class="{
            filled: star <= selectedRating,
            hovered: star <= hoverStarRating,
          }"
          xmlns="http://www.w3.org/2000/svg"
          width="36.15839mm"
          height="34.38908mm"
          viewBox="0 0 36.15839 34.38908"
          stroke-linejoin="round"
          fill="currentColor"
        >
          <g transform="translate(-11.727255,-59.095782)">
            <path
              d="m 29.806452,62.520781 3.49885,10.768894 H 44.62841 l -9.16058,6.655506 3.499202,10.768894 -9.16058,-6.655506 -9.16058,6.655506 3.499202,-10.768894 -9.16058,-6.655506 h 11.323108 z"
              class="starStyle"
            />
          </g>
        </svg>
      </label>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  // import { initializeApp } from 'firebase/app';
  // import { getFirestore, collection, addDoc } from 'firebase/firestore';
  // import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDFqyHh73lpevPuEQya8ETRgbnqiGWpig0",
  //   authDomain: "sbux-adsforgood.firebaseapp.com",
  //   projectId: "sbux-adsforgood",
  //   storageBucket: "sbux-adsforgood.appspot.com",
  //   messagingSenderId: "688641662421",
  //   appId: "1:688641662421:web:fba77b9802688f536bb15c",
  //   measurementId: "G-1WMQ79BXYT"
  // };
  // const app = initializeApp(firebaseConfig);
  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaV3Provider('6LdG5dgmAAAAAKLoCifNyrENXQnD55BrjpulmZk0'),
  //   isTokenAutoRefreshEnabled: true
  // });
  // const db = getFirestore(app);
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
      value: {
        type: Number,
        default: 0,
      },
    },
    setup(props, { emit }) {
      const selectedRating = ref(props.initialRating);
      const hoverStarRating = ref(0);

      const stars = Array.from({ length: props.maxRating }, (_, index) => index + 1);

      const submitRating = (star) => {
        selectedRating.value = star;
        emit('update:value', star);
        console.log(star)
      };
      const hoverStar = (star) => {
        hoverStarRating.value = star;
      };
  
      const resetHoverStar = () => {
        hoverStarRating.value = 0;
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
    stroke-width:1;
    stroke-linecap:butt;
    /* stroke-linejoin:round; */
    stroke-miterlimit:10;
    stroke-dasharray:none;
    stroke-opacity:1
  }
  .rating-star:hover .hovered .starStyle{
    fill:yellow;
    stroke:#252525;
  }

  .rating-star:hover ~ .rating-star .hovered .starStyle{
    fill:#aaa;
    stroke:#252525;
  }
  .rating {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;
    /* border-radius: 30px; */
  }
  
  .rating-input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  
  .rating-star {
    cursor: pointer;
  }
  
  .rating-star svg {
    width: 3rem;
  height: 3rem;
  }
  
  .rating-star .filled .starStyle{
    fill: yellow;
  }
  
  .rating-star .hovered .starStyle{
    fill: yellow;
  }
  </style>
  