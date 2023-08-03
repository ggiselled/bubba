<template>
  <div class="dynamic-form">
    <InputField
      :fieldName="firstName.fieldName"
      :label="firstName.label"
      :placeholder="firstName.placeholder"
      :value="firstNameValue"
      @input="updateFirstName"
    />
    <InputField
      :fieldName="lastName.fieldName"
      :label="lastName.label"
      :placeholder="lastName.placeholder"
      :value="lastNameValue"
      @input="updateLastName"
    />
    <InputField
      :fieldName="email.fieldName"
      :label="email.label"
      :type="email.type"
      :placeholder="email.placeholder"
      :value="emailValue"
      @input="updateEmail"
    />
    
    <button type="submit">Enviar</button>
  </div>
</template>

<script>
import InputField from './InputField.vue';

export default {
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
  },
};
</script>

<style>
.dynamic-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background-color: #0056b3;
}
</style>
