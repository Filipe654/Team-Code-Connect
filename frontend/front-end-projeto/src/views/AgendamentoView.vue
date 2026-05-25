<template>
  <AppShell>
    <section class="page-section schedule-page">
      <button class="btn btn-link back-link" type="button" @click="$router.push('/inicio')">
        <i class="bi bi-arrow-left-circle"></i> Voltar
      </button>

      <form class="schedule-card dark-panel" @submit.prevent="confirmSchedule">
        <h1>Agendamento de Vaga</h1>

        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Local da vaga</label>
            <select v-model="form.spot" class="form-select form-field" required>
              <option value="">Selecione</option>
              <option v-for="spot in availableSpots" :key="spot.id" :value="spot.name">
                {{ spot.name }} - {{ spot.available }} vagas livres
              </option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Veículo</label>
            <select v-model="form.vehicle" class="form-select form-field" required>
              <option value="">Selecione</option>
              <option v-for="vehicle in vehicles" :key="vehicle.id" :value="`${vehicle.plate} - ${vehicle.model}`">
                {{ vehicle.plate }} - {{ vehicle.model }}
              </option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label">Data</label>
            <input v-model="form.date" class="form-control form-field" type="date" required />
          </div>

          <div class="col-md-4">
            <label class="form-label">Entrada</label>
            <input v-model="form.start" class="form-control form-field" type="time" required />
          </div>

          <div class="col-md-4">
            <label class="form-label">Saída</label>
            <input v-model="form.end" class="form-control form-field" type="time" required />
          </div>

          <div class="col-12">
            <label class="form-label">Observações</label>
            <textarea v-model="form.notes" class="form-control form-field" rows="3" placeholder="Ex.: carga sensível, veículo maior, contato do motorista"></textarea>
          </div>
        </div>

        <aside v-if="lastSchedule" class="schedule-result">
          <i class="bi bi-check-circle-fill"></i>
          <span>Último agendamento: {{ lastSchedule.spot }} para {{ lastSchedule.vehicle }} em {{ lastSchedule.date }}.</span>
        </aside>

        <div class="actions">
          <button class="btn btn-acd-primary" type="submit">Confirmar Agendamento</button>
          <button class="btn btn-light" type="button" @click="resetForm">Limpar</button>
        </div>
      </form>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { addSchedule, getVehicles, getParkingSpots } from '../data/storage'

const emptyForm = {
  spot: '',
  vehicle: '',
  date: '',
  start: '',
  end: '',
  notes: ''
}

export default {
  name: 'AgendamentoView',
  components: { AppShell },
  data() {
    return {
      form: { ...emptyForm },
      vehicles: getVehicles(),
      spots: getParkingSpots(),
      lastSchedule: null
    }
  },
  computed: {
    availableSpots() {
      return this.spots.filter((spot) => spot.status === 'available')
    }
  },
  methods: {
    confirmSchedule() {
      this.lastSchedule = addSchedule({ ...this.form })
      alert('Agendamento confirmado no sistema.')
      this.resetForm()
    },
    resetForm() {
      this.form = { ...emptyForm }
    }
  }
}
</script>

<style scoped>
.schedule-page {
  min-height: 620px;
  display: grid;
  align-content: center;
  gap: 1rem;
}

.back-link {
  justify-self: start;
  color: var(--color-dark);
  font-weight: 800;
  text-decoration: none;
}

.schedule-card {
  width: min(100%, 860px);
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 2rem);
}

.schedule-card h1 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: center;
}

.form-label {
  font-weight: 800;
}

.schedule-result {
  margin-top: 1rem;
  padding: 0.85rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.12);
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.schedule-result i {
  color: var(--color-yellow);
  font-size: 1.2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
</style>
