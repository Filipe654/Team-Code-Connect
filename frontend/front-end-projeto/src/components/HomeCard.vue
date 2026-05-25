<template>
  <button type="button" class="home-card" @click="$emit('click')">
    <i :class="iconClass" aria-hidden="true"></i>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    iconClass: {
      type: String,
      default: 'bi bi-grid-3x3-gap-fill'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.home-card {
  width: 220px;
  height: 140px;
  border-radius: 14px;
  background-color: var(--color-dark);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1rem;
  box-shadow: 0 8px 18px rgba(57, 69, 78, 0.14);
}

.home-card:hover,
.home-card:focus-visible {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(57, 69, 78, 0.2);
}

.home-card i {
  color: var(--color-yellow);
  font-size: 2.4rem;
  line-height: 1;
}

.home-card span {
  font-size: 0.95rem;
  font-weight: 800;
  text-align: center;
}
</style>
