<template>
  <AppShell>
    <section class="page-section drivers-page">
      <div class="drivers-panel light-panel">
        <header class="drivers-header">
          <div>
            <h1>Consultar Condutores</h1>
            <p>Lista para visualização do fluxo do sistema.</p>
          </div>

          <label class="search-box">
            <i class="bi bi-search"></i>
            <input v-model="search" type="text" placeholder="Buscar condutor, placa ou CPF" />
          </label>
        </header>

        <div class="table-responsive">
          <table class="table table-acd table-striped align-middle">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Veículo</th>
                <th>Placa</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="driver in filteredDrivers" :key="driver.id">
                <td>{{ driver.name }}</td>
                <td>{{ driver.cpf }}</td>
                <td>{{ driver.phone }}</td>
                <td>{{ driver.vehicle }}</td>
                <td>{{ driver.plate }}</td>
                <td>
                  <span :class="['status-pill', statusClass(driver.status)]">{{ driver.status }}</span>
                </td>
                <td>
                  <router-link class="btn btn-sm btn-acd-primary" :to="{ name: 'funcionario', query: { id: driver.id } }">Ver</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { drivers } from '../data/mockData'

export default {
  name: 'CondutoresView',
  components: { AppShell },
  data() {
    return {
      search: '',
      drivers
    }
  },
  computed: {
    filteredDrivers() {
      const term = this.search.toLowerCase()
      return this.drivers.filter((driver) => `${driver.name} ${driver.cpf} ${driver.plate}`.toLowerCase().includes(term))
    }
  },
  methods: {
    statusClass(status) {
      if (status === 'Indisponível') return 'status-danger'
      if (status === 'Disponível') return 'status-success'
      return 'status-warning'
    }
  }
}
</script>

<style scoped>
.drivers-panel {
  padding: clamp(1rem, 3vw, 1.5rem);
}

.drivers-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.drivers-header h1 {
  color: var(--color-dark);
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.drivers-header p {
  margin: 0;
  color: #59636a;
}

.search-box {
  min-width: 280px;
  min-height: 42px;
  border-radius: 12px;
  border: 1px solid #d3d9dd;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
}

.search-box input {
  width: 100%;
  border: 0;
}

@media (max-width: 767.98px) {
  .drivers-header {
    align-items: stretch;
    flex-direction: column;
  }

  .search-box {
    min-width: 100%;
  }
}
</style>
