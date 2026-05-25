<template>
  <AppShell>
    <section class="page-section employee-page">
      <article class="employee-card light-panel">
        <header>
          <h1>Detalhes do Condutor</h1>
        </header>

        <div class="employee-body">
          <div class="employee-avatar">
            <i class="bi bi-person-circle"></i>
          </div>

          <div class="employee-info">
            <p><strong>Nome:</strong> {{ driver.name }}</p>
            <p><strong>CPF:</strong> {{ driver.cpf }}</p>
            <p><strong>Email:</strong> {{ driver.email }}</p>
            <p><strong>Telefone:</strong> {{ driver.phone }}</p>
            <p><strong>Veículo:</strong> {{ driver.vehicle }}</p>
            <p><strong>Placa:</strong> {{ driver.plate }}</p>
            <p><strong>Status:</strong> {{ driver.status }}</p>
          </div>
        </div>

        <button class="btn btn-acd-dark" type="button" @click="$router.push('/condutores')">Voltar</button>
      </article>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { drivers } from '../data/mockData'

export default {
  name: 'FuncionarioView',
  components: { AppShell },
  computed: {
    driver() {
      return drivers.find((item) => item.id === Number(this.$route.query.id)) || drivers[0]
    }
  }
}
</script>

<style scoped>
.employee-page {
  display: grid;
  place-items: center;
  min-height: 620px;
}

.employee-card {
  width: min(100%, 760px);
  padding: clamp(1.25rem, 4vw, 2rem);
}

.employee-card header {
  border-radius: var(--radius-default);
  background: var(--color-dark);
  color: var(--color-white);
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.employee-card h1 {
  margin: 0;
  font-weight: 800;
}

.employee-body {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.employee-avatar {
  color: var(--color-dark);
  font-size: 8rem;
  text-align: center;
}

.employee-info p {
  margin-bottom: 0.55rem;
}

@media (max-width: 640px) {
  .employee-body {
    grid-template-columns: 1fr;
  }
}
</style>
