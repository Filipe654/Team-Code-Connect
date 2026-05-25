<template>
  <button class="app-button" :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>
.app-button {
  width: min(100%, 280px);
  min-height: 40px;
  margin-top: 8px;
  border-radius: 6px;
  background-color: var(--color-yellow);
  color: var(--color-dark);
  font-weight: 800;
  font-size: 0.95rem;
}

.app-button:hover,
.app-button:focus-visible {
  background-color: #f2bf00;
  box-shadow: 0 8px 16px rgba(57, 69, 78, 0.16);
}
</style>
