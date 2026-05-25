<template>
  <AuthLayout>
    <div class="auth-title-row">
      <i class="bi bi-person-circle auth-icon" aria-hidden="true"></i>
      <h1>Cadastro</h1>
    </div>

    <AppInput v-model="nome" type="text" placeholder="Digite seu nome" />
    <AppInput v-model="email" type="email" placeholder="Digite seu e-mail" />
    <AppInput v-model="senha" type="password" placeholder="Crie uma senha" />
    <AppInput v-model="confirmarSenha" type="password" placeholder="Confirme sua senha" />

    <AppButton @click="fazerCadastro">Cadastrar</AppButton>

    <p class="auth-link-text">
      Já possui conta?
      <router-link to="/">Voltar para login</router-link>
    </p>
  </AuthLayout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue'
import AppInput from '../components/AppInput.vue'
import AppButton from '../components/AppButton.vue'

export default {
  name: 'CadastroView',
  components: { AuthLayout, AppInput, AppButton },
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    }
  },
  methods: {
    fazerCadastro() {
      if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
        alert('Preencha todos os campos.')
        return
      }

      if (this.senha !== this.confirmarSenha) {
        alert('As senhas não coincidem.')
        return
      }

      alert('Cadastro realizado com sucesso.')
      this.$router.push('/')
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
