<template>
  <div class="dynamic-form" >
    <form @submit.prevent="submitForm">
      <InputField
        :fieldName="firstName.fieldName"
        :label="firstName.label"
        :placeholder="firstName.placeholder"
        @input="updateFirstName"
      />
      <InputField
        :fieldName="lastName.fieldName"
        :label="lastName.label"
        :placeholder="lastName.placeholder"
        @input="updateLastName"
      />
      <InputField
        :type="email.type"
        :fieldName="email.fieldName"
        :label="email.label"
        :placeholder="email.placeholder"
        @input="updateEmail"
      />
      <RatingComponent
        :name="name"
        :maxRating="maxRating"
        :initialRating="initialRating"
        v-model="selectedRating"
        @update:value="handleRatingChange"
      />
      <!-- <div class="rating">
        <StarRatingComponent />
      </div> -->
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import InputField from './InputField.vue';
import { defineComponent } from "vue";
// import StarRatingComponent from './StarRatingComponent.vue';
import { createItem } from '../../api/items-api'
import RatingComponent from './RatingComponent.vue';

export default defineComponent({
  components: {
    InputField,
    RatingComponent 
    // StarRatingComponent
  },
  props: {
    firstName: { type: Object, required: true },
    lastName: { type: Object, required: true },
    email: { type: Object, required: true },
    rating: { type: Object, required: true }
  },
  data() {
    return {
      firstNameValue: this.firstName.value,
      lastNameValue: this.lastName.value,
      emailValue: this.email.value,
      selectedRating: 0,
      name: 'rating',
      maxRating: 5,
      initialRating: 0,
    };
  },
  methods: {
    updateFirstName(value) {
      this.firstNameValue = value;
      this.$emit('update:firstName', value);
    },
    updateLastName(value) {
      this.lastNameValue = value;
      this.$emit('update:lastName', value);
    },
    updateEmail(value) {
      this.emailValue = value;
      this.$emit('update:email', value);
    },
    handleRatingChange(value) {
      this.selectedRating = value;
      console.log('Rating changed to:', value);
    },
    async submitForm() {

      const formData = {
        itemId: "1",
        firstName: this.firstNameValue.target.value,
        lastName: this.lastNameValue.target.value,
        email: this.emailValue.target.value,
        rating: this.selectedRating,
      };

      console.log(formData);
      
      try {

        const data = await createItem(formData);
        console.log(data)

        this.firstNameValue = '';
        this.lastNameValue = '';
        this.emailValue = '';


        alert('Formulario enviado con éxito');
      } catch (error) {

        console.error(error);
        alert('Hubo un error al enviar el formulario');
      }

      this.firstNameValue = '';
      this.lastNameValue = '';
      this.emailValue = '';
    },
  }
})
</script>

<style>
.dynamic-form {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 75%;
}

.rating{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
}

button {
  width: 100%;
  padding: 10px 20px;
  background-color: white;

  border: 2px solid #999;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  text-align: center;
  font-family: 'Gotham Rounded Bold Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
  text-align: center;
}
button:hover {
  background-color: #252525;
  color: #fff;
}
</style>
