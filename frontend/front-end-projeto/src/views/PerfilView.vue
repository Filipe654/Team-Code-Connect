<template>
  <AppShell>
    <section class="page-section profile-page">
      <form class="profile-card light-panel" @submit.prevent="saveProfile">
        <header>
          <h1>Perfil</h1>
        </header>

        <div class="profile-body">
          <section class="avatar-area">
            <div class="avatar"><i class="bi bi-person-circle"></i></div>
            <button type="button" class="camera" aria-label="Alterar foto"><i class="bi bi-camera"></i></button>
            <input v-model="form.name" class="name-input" aria-label="Nome do usuário" />
          </section>

          <section class="info-box">
            <h2>Informações da Conta</h2>

            <label>
              <span>Email</span>
              <input v-model="form.email" class="form-field" type="email" />
            </label>

            <label>
              <span>Senha</span>
              <input v-model="form.password" class="form-field" type="password" />
            </label>

            <label>
              <span>Telefone</span>
              <input v-model="form.phone" class="form-field" />
            </label>

            <label>
              <span>CPF/CNPJ</span>
              <input v-model="form.document" class="form-field" />
            </label>
          </section>
        </div>

        <div class="profile-actions">
          <button type="submit" class="btn btn-acd-primary">Salvar</button>
          <button type="button" class="btn btn-acd-dark" @click="resetProfile">Cancelar</button>
        </div>
      </form>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { userProfile } from '../data/mockData'
import { getProfile, saveProfile } from '../data/storage'

export default {
  name: 'PerfilView',
  components: { AppShell },
  data() {
    return {
      form: { ...getProfile(userProfile) }
    }
  },
  methods: {
    saveProfile() {
      saveProfile({ ...this.form })
      alert('Perfil salvo no sistema.')
    },
    resetProfile() {
      this.form = { ...getProfile(userProfile) }
    }
  }
}
</script>

<style scoped>
.profile-page {
  min-height: 620px;
  display: grid;
  place-items: center;
}

.profile-card {
  width: min(100%, 920px);
  overflow: hidden;
}

.profile-card header {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 1rem 1.5rem;
}

.profile-card h1 {
  margin: 0;
  font-weight: 800;
}

.profile-body {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 2rem;
  padding: clamp(1.25rem, 4vw, 2rem);
}

.avatar-area {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 0.75rem;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--color-page);
  color: var(--color-dark);
  display: grid;
  place-items: center;
  font-size: 6rem;
}

.camera {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-yellow);
  color: var(--color-dark);
  font-size: 1.15rem;
}

.name-input {
  width: min(100%, 220px);
  min-height: 42px;
  border-radius: 10px;
  background-color: var(--color-white);
  border: 1px solid #d3d9dd;
  color: var(--color-dark);
  font-size: 1.05rem;
  font-weight: 800;
  text-align: center;
}

.info-box h2 {
  color: var(--color-dark);
  font-size: 1.35rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
}

.info-box label {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
  color: var(--color-dark);
  font-weight: 800;
}

.profile-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 1.25rem 1.5rem;
}

.profile-actions .btn {
  min-width: 160px;
  min-height: 44px;
}

@media (max-width: 767.98px) {
  .profile-body,
  .info-box label {
    grid-template-columns: 1fr;
  }
}
</style>
