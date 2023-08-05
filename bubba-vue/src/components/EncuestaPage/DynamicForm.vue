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
        :fieldName="email.fieldName"
        :label="email.label"
        :type="email.type"
        :placeholder="email.placeholder"
        @input="updateEmail"
      />
      <InputField
        :fieldName="email.fieldName"
        :label="email.label"
        :type="email.type"
        :placeholder="email.placeholder"
        @input="updateEmail"
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import InputField from './InputField.vue';
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    InputField,
  },
  props: {
    firstName: { type: Object, required: true },
    lastName: { type: Object, required: true },
    email: { type: Object, required: true },
  },
  data() {
    return {
      firstNameValue: this.firstName.value,
      lastNameValue: this.lastName.value,
      emailValue: this.email.value,
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
    submitForm() {
      // You can access the form data from the component's data properties
      const formData = {
        firstName: this.firstNameValue.target.value,
        lastName: this.lastNameValue.target.value,
        email: this.emailValue.target.value,
      };

      // Do something with the formData, like sending it to a server
      console.log(formData);

      // Optionally, you can reset the form after submission
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
  align-items: center;
  margin-top: 4rem;
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
  background-color: #0056b3;
}
</style>
