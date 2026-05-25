<template>
  <AppShell>
    <form class="vehicle-page page-section" @submit.prevent="submitVehicle">
      <div class="forms-grid">
        <section class="vehicle-panel dark-panel">
          <h1>Dados do Proprietário</h1>
          <label>Nome Completo<input v-model="form.ownerName" class="form-field" required /></label>
          <label>CPF/CNPJ<input v-model="form.document" class="form-field" required /></label>
          <label>Endereço<input v-model="form.address" class="form-field" required /></label>
          <label>Telefone<input v-model="form.phone" class="form-field" required /></label>
        </section>

        <section class="vehicle-panel dark-panel">
          <h1>Dados do Veículo</h1>
          <label>Placa<input v-model="form.plate" class="form-field" required /></label>
          <label>Marca<input v-model="form.brand" class="form-field" required /></label>
          <label>Modelo<input v-model="form.model" class="form-field" required /></label>
          <label>Tipo<input v-model="form.type" class="form-field" required /></label>
          <label>Ano<input v-model="form.year" class="form-field" type="number" required /></label>
          <label>Cor<input v-model="form.color" class="form-field" required /></label>
          <button type="button" class="upload"><i class="bi bi-camera-fill"></i> Carregar Foto do Veículo</button>
        </section>
      </div>

      <aside class="vehicle-summary light-panel">
        <i class="bi bi-truck-front-fill"></i>
        <h2>Prévia do cadastro</h2>
        <p><strong>Proprietário:</strong> {{ form.ownerName || 'Não informado' }}</p>
        <p><strong>Veículo:</strong> {{ vehiclePreview }}</p>
        <p><strong>Placa:</strong> {{ form.plate || 'Não informada' }}</p>
      </aside>

      <div class="vehicle-actions">
        <button type="submit" class="btn btn-acd-dark">Finalizar Registro</button>
        <button type="button" class="btn btn-light" @click="resetForm">Cancelar Registro</button>
      </div>
    </form>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { addVehicle } from '../data/storage'

const emptyForm = {
  ownerName: '',
  document: '',
  address: '',
  phone: '',
  plate: '',
  brand: '',
  model: '',
  type: '',
  year: '',
  color: ''
}

export default {
  name: 'RegistrarVeiculosView',
  components: { AppShell },
  data() {
    return {
      form: { ...emptyForm }
    }
  },
  computed: {
    vehiclePreview() {
      const parts = [this.form.brand, this.form.model].filter(Boolean)
      return parts.length ? parts.join(' ') : 'Não informado'
    }
  },
  methods: {
    submitVehicle() {
      addVehicle({
        owner: this.form.ownerName,
        plate: this.form.plate.toUpperCase(),
        brand: this.form.brand,
        model: this.form.model,
        type: this.form.type,
        color: this.form.color,
        year: this.form.year
      })

      alert('Veículo registrado no mini sistema. Ele já aparece nas telas de agendamento e multas.')
      this.$router.push('/multas')
    },
    resetForm() {
      this.form = { ...emptyForm }
    }
  }
}
</script>

<style scoped>
.vehicle-page {
  min-height: 620px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  grid-template-areas:
    'forms summary'
    'forms actions';
  gap: 1.5rem;
  align-items: center;
}

.forms-grid {
  grid-area: forms;
  display: grid;
  gap: 1rem;
}

.vehicle-panel {
  padding: clamp(1rem, 3vw, 1.5rem);
}

.vehicle-panel h1 {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  text-decoration: underline;
  margin-bottom: 1rem;
}

.vehicle-panel label {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.vehicle-panel .form-field {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.28);
}

.upload {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem auto 0;
  padding: 0.45rem 0.85rem;
  border: 1px solid var(--color-white);
  border-radius: 8px;
  background: transparent;
  color: var(--color-white);
  font-weight: 800;
}

.vehicle-summary {
  grid-area: summary;
  padding: 1rem;
}

.vehicle-summary i {
  color: var(--color-yellow);
  font-size: 2rem;
}

.vehicle-summary h2 {
  color: var(--color-dark);
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0.5rem 0 1rem;
}

.vehicle-summary p {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.vehicle-actions {
  grid-area: actions;
  display: grid;
  gap: 1rem;
}

.vehicle-actions .btn {
  min-height: 52px;
  font-weight: 800;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .vehicle-page {
    grid-template-columns: 1fr;
    grid-template-areas:
      'forms'
      'summary'
      'actions';
  }

  .vehicle-actions {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575.98px) {
  .vehicle-panel label,
  .vehicle-actions {
    grid-template-columns: 1fr;
  }
}
</style>
