<template>
  <main class="payment-page">
    <section class="payment-card dark-panel">
      <button class="back" type="button" @click="$router.push('/multas')">
        <i class="bi bi-arrow-left-circle"></i>
      </button>

      <h1>Pagamento de Multa</h1>

      <article class="payment-total">
        <span>Total a pagar</span>
        <strong>{{ formatCurrency(totalValue) }}</strong>
      </article>

      <div class="payment-details">
        <p><strong>Veículo:</strong> {{ vehicleLabel }}</p>
        <p><strong>Infrações:</strong> {{ finesDescription }}</p>
        <p><strong>Vencimento:</strong> 30/12/2026</p>
      </div>

      <div class="payment-methods">
        <button :class="{ active: method === 'pix' }" @click="method = 'pix'"><i class="bi bi-qr-code"></i> Pix</button>
        <button :class="{ active: method === 'boleto' }" @click="method = 'boleto'"><i class="bi bi-upc"></i> Boleto</button>
        <button :class="{ active: method === 'cartao' }" @click="method = 'cartao'"><i class="bi bi-credit-card-2-front-fill"></i> Cartão</button>
      </div>

      <label class="terms">
        <input v-model="acceptedTerms" type="checkbox" />
        Aceito os termos e condições
      </label>

      <button class="btn btn-acd-primary finish" type="button" :disabled="!canFinish" @click="finishPayment">
        Finalizar Pagamento
      </button>
    </section>
  </main>
</template>

<script>
import { getVehicles, getFines, payAllFines } from '../data/storage'

export default {
  name: 'PagamentoView',
  data() {
    return {
      method: '',
      acceptedTerms: false,
      vehicles: getVehicles(),
      fines: getFines()
    }
  },
  computed: {
    vehicleId() {
      return Number(this.$route.query.vehicleId || 1)
    },
    vehicle() {
      return this.vehicles.find((item) => item.id === this.vehicleId)
    },
    selectedFines() {
      return this.fines.filter((fine) => fine.vehicleId === this.vehicleId)
    },
    totalValue() {
      return this.selectedFines.reduce((total, fine) => total + fine.value, 0)
    },
    vehicleLabel() {
      return this.vehicle ? `${this.vehicle.plate} - ${this.vehicle.model}` : 'Veículo não localizado'
    },
    finesDescription() {
      return this.selectedFines.length ? this.selectedFines.map((fine) => fine.type).join(' / ') : 'Nenhuma multa em aberto'
    },
    canFinish() {
      return this.acceptedTerms && this.method && this.selectedFines.length
    }
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    finishPayment() {
      payAllFines(this.vehicleId)
      alert('Pagamento realizado com sucesso. As multas foram removidas do sistema.')
      this.$router.push('/multas')
    }
  }
}
</script>

<style scoped>
.payment-page {
  min-height: 100vh;
  background-color: var(--color-muted);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.payment-card {
  width: min(100%, 760px);
  padding: clamp(1.25rem, 4vw, 2.25rem);
  position: relative;
}

.back {
  position: absolute;
  left: 1rem;
  top: 1rem;
  background: transparent;
  color: var(--color-white);
  font-size: 1.7rem;
}

.payment-card h1 {
  text-align: center;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.payment-total {
  border-radius: var(--radius-default);
  background: var(--color-white);
  color: var(--color-dark);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.payment-total strong {
  font-size: 1.6rem;
}

.payment-details {
  border-radius: var(--radius-default);
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
}

.payment-details p {
  margin-bottom: 0.4rem;
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.payment-methods button {
  min-height: 76px;
  border-radius: var(--radius-default);
  background: var(--color-white);
  color: var(--color-dark);
  font-weight: 800;
  display: grid;
  place-items: center;
}

.payment-methods button.active {
  outline: 4px solid var(--color-yellow);
}

.payment-methods i {
  font-size: 1.6rem;
}

.terms {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.finish {
  width: 100%;
  min-height: 44px;
}

@media (max-width: 575.98px) {
  .payment-methods {
    grid-template-columns: 1fr;
  }
}
</style>
