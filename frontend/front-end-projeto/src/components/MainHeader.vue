<template>
  <header class="main-header navbar navbar-expand-lg">
    <div class="container-fluid header-container">
      <router-link to="/inicio" class="brand-box navbar-brand" aria-label="Ir para tela inicial">
        <img src="@/assets/home/logo-header.png" alt="DSIN" />
      </router-link>

      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavigation"
        aria-controls="mainNavigation"
        aria-expanded="false"
        aria-label="Abrir menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav id="mainNavigation" class="collapse navbar-collapse justify-content-lg-center">
        <div class="navbar-nav main-nav">
          <router-link to="/inicio" class="nav-link">Home</router-link>
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/contato" class="nav-link">Contato</router-link>
          <router-link to="/perfil" class="nav-link">Perfil</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
.main-header {
  min-height: 96px;
  background-color: var(--color-yellow);
}

.header-container {
  padding: 0 24px;
}

.brand-box {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background-color: var(--color-dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-shrink: 0;
}

.brand-box img {
  width: 82%;
  object-fit: contain;
}

.main-nav {
  width: min(100%, 740px);
  gap: clamp(0.75rem, 3vw, 2.25rem);
  justify-content: center;
}

.main-nav .nav-link {
  min-width: 130px;
  min-height: 42px;
  padding: 0.55rem 1.25rem;
  border-radius: 12px;
  background-color: var(--color-white);
  color: var(--color-dark);
  font-size: 1rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.main-nav .nav-link.router-link-exact-active,
.main-nav .nav-link:hover,
.main-nav .nav-link:focus-visible {
  color: var(--color-dark);
  font-weight: 800;
  background-color: #fff4b8;
}

@media (max-width: 991.98px) {
  .main-header {
    min-height: auto;
    padding: 12px 0;
  }

  .main-nav {
    width: 100%;
    gap: 0.65rem;
    padding: 1rem 0 0.25rem;
  }

  .main-nav .nav-link {
    width: 100%;
  }
}
</style>
