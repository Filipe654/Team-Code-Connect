<template>
  <div class="auth-page">
    <section class="auth-banner">
      <img src="@/assets/auth/banner-auth.png" alt="Banner DSIN" class="banner-image" />
      <div class="banner-overlay">
        <img src="@/assets/auth/logo-dsin.png" alt="Logo DSIN" class="logo-image" />
      </div>
    </section>

    <section class="auth-content">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  background-color: var(--color-page);
  display: flex;
  flex-direction: column;
}

.auth-banner {
  position: relative;
  width: 100%;
  height: 40vh;
  min-height: 220px;
  max-height: 400px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
}

.logo-image {
  width: min(70%, 420px);
  object-fit: contain;
}

.auth-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 16px 40px;
}
</style>
