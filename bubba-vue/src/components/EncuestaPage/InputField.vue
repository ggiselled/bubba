<template>
  <div class="input-field">
    <input :type="type" :id="fieldName" :name="fieldName" :placeholder="placeholder" :value="internalValue" @input="updateValue($event.target.value)" />
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

.input-field input {
  border: none;
  border-bottom: 3px solid #999;
  padding: 5px 0;
  width: 100%;
}

.input-field input::placeholder {
  text-align: left;
  font-size: 20px;
  color: #999;
}

.input-field input[type="text"] {
  font-size: 16px;
}
</style>
