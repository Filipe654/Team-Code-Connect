<template>
  <AppShell>
    <section class="page-section fines-page">
      <section class="select-panel dark-panel">
        <h1>Selecione o Veículo Registrado</h1>

        <select v-model="selectedVehicleId" class="form-select form-field" @change="consulted = false">
          <option value="">Selecione um veículo</option>
          <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
            {{ vehicle.plate }} - {{ vehicle.model }}
          </option>
        </select>

        <button class="btn btn-acd-primary" type="button" :disabled="!selectedVehicleId" @click="consulted = true">
          <i class="bi bi-search"></i> Consultar
        </button>

        <router-link to="/registrar-veiculos" class="register-link">
          Sem veículo registrado? Clique para registrar
        </router-link>
      </section>

      <div class="arrows"><i class="bi bi-chevron-double-right"></i></div>

      <section class="table-panel dark-panel">
        <h1>Todas as Multas Encontradas</h1>

        <div class="table-responsive">
          <table class="table table-light table-striped align-middle mb-3">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Data</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fine in filteredFines" :key="fine.id">
                <td>{{ fine.type }}</td>
                <td>{{ fine.date }}</td>
                <td>{{ formatCurrency(fine.value) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-if="consulted && !filteredFines.length" class="empty-state">
          Nenhuma multa encontrada para o veículo selecionado.
        </p>

        <div class="summary-box" v-if="filteredFines.length">
          <span>Total</span>
          <strong>{{ formatCurrency(totalValue) }}</strong>
        </div>

        <button
          class="btn btn-acd-primary"
          type="button"
          :disabled="!filteredFines.length"
          @click="goPayment"
        >
          Ir para pagamento
        </button>
      </section>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { getVehicles, getFines } from '../data/storage'

export default {
  name: 'MultasView',
  components: { AppShell },
  data() {
    return {
      vehicles: getVehicles(),
      fines: getFines(),
      selectedVehicleId: '',
      consulted: false
    }
  },
  computed: {
    filteredFines() {
      if (!this.consulted || !this.selectedVehicleId) return []
      return this.fines.filter((fine) => fine.vehicleId === Number(this.selectedVehicleId))
    },
    totalValue() {
      return this.filteredFines.reduce((total, fine) => total + fine.value, 0)
    }
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    goPayment() {
      this.$router.push({ name: 'pagamento', query: { vehicleId: this.selectedVehicleId } })
    }
  }
}
</script>

<style scoped>
.fines-page {
  min-height: 620px;
  display: grid;
  grid-template-columns: minmax(260px, 360px) 72px minmax(360px, 1fr);
  gap: 1.25rem;
  align-items: center;
}

.select-panel,
.table-panel {
  padding: clamp(1.25rem, 3vw, 2rem);
}

.select-panel {
  display: grid;
  gap: 1rem;
}

h1 {
  font-size: 1.35rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
}

.register-link {
  color: var(--color-yellow);
  font-weight: 800;
  text-align: center;
  text-decoration: underline;
}

.arrows {
  text-align: center;
  color: var(--color-dark);
  font-size: 2rem;
}

.empty-state {
  color: var(--color-white);
  text-align: center;
  font-weight: 800;
}

.summary-box {
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  padding: 0.85rem;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  margin-bottom: 1rem;
}

.summary-box strong {
  color: var(--color-yellow);
}

@media (max-width: 900px) {
  .fines-page {
    grid-template-columns: 1fr;
  }

  .arrows {
    transform: rotate(90deg);
  }
}
</style>
