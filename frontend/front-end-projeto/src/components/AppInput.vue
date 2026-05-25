<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="app-input"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.app-input {
  width: min(100%, 280px);
  min-height: 40px;
  margin-bottom: 12px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: var(--color-dark);
  color: var(--color-white);
  font-size: 0.9rem;
}

.app-input::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.app-input:focus {
  border-color: var(--color-yellow);
  box-shadow: 0 0 0 0.2rem rgba(255, 204, 1, 0.25);
}
</style>
