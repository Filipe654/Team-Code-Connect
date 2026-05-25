<template>
  <AuthLayout>
    <div class="auth-title-row">
      <i class="bi bi-person-circle auth-icon" aria-hidden="true"></i>
      <h1>Bem-Vindo!</h1>
    </div>

    <AppInput v-model="email" type="email" placeholder="Digite seu e-mail" />
    <AppInput v-model="senha" type="password" placeholder="Digite sua senha" />

    <AppButton @click="fazerLogin">Acessar</AppButton>

    <p class="auth-link-text">
      Ainda não possui conta?
      <router-link to="/cadastro">Cadastre-se</router-link>
    </p>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue'
import AppInput from '../components/AppInput.vue'
import AppButton from '../components/AppButton.vue'

export default {
  name: 'LoginView',
  components: { AuthLayout, AppInput, AppButton },
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    fazerLogin() {
      if (!this.email || !this.senha) {
        alert('Preencha todos os campos.')
        return
      }

      this.$router.push('/inicio')
    }
  }
}
</script>

<style scoped>
.auth-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.auth-icon {
  color: var(--color-dark);
  font-size: 2rem;
  line-height: 1;
}

.auth-title-row h1 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-dark);
  margin: 0;
}

.auth-link-text {
  margin-top: 14px;
  font-size: 14px;
  color: var(--color-dark);
}

.auth-link-text a {
  font-weight: 800;
  text-decoration: underline;
}
</style>
