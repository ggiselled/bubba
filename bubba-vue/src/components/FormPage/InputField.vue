<template>
  <div class="input-field">
    <input 
      :type="type" 
      :id="fieldName" 
      :name="fieldName" 
      :placeholder="placeholder" 
      :value="internalValue" 
      @input="updateValue($event.target.value)" 
    />
  </div>
</template>

<script>
export default {
  props: {
    fieldName: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' },
  },
  data() {
    return {
      internalValue: this.value,
    };
  },
  methods: {
    updateValue(newValue) {
      this.internalValue = newValue;
      this.$emit('input', newValue);
    },
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
};
</script>

<style>
.input-field {
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}
.input-field input {
  border: none;
  border-bottom: 2px solid #999;
  padding: 5px 0;
  width: 100%;
}

.input-field input:focus {
  outline: none;
  border-bottom: 3px solid black; /* O cualquier otro color que desees */
}

.input-field input[type="text"],
.input-field input[type="email"] {
  font-family: 'Gotham Rounded Bold Regular', sans-serif;
  font-size: 20px;
}
</style>
