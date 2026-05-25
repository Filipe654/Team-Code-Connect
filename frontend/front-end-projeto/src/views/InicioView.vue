<template>
  <AppShell>
    <section class="home-content">
      <div class="home-grid">
        <HomeCard
          v-for="card in cards"
          :key="card.text"
          :icon-class="card.iconClass"
          :text="card.text"
          @click="$router.push(card.to)"
        />
      </div>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import HomeCard from '../components/HomeCard.vue'

export default {
  name: 'InicioView',
  components: { AppShell, HomeCard },
  data() {
    return {
      cards: [
        { iconClass: 'bi bi-geo-alt-fill', text: 'Consultar Vagas', to: '/consultar-vagas' },
        { iconClass: 'bi bi-calendar-check-fill', text: 'Agendar Vagas', to: '/agendamento' },
        { iconClass: 'bi bi-receipt-cutoff', text: 'Consultar Multas', to: '/multas' },
        { iconClass: 'bi bi-truck-front-fill', text: 'Registrar Veículos', to: '/registrar-veiculos' },
        { iconClass: 'bi bi-person-vcard-fill', text: 'Consultar Condutores', to: '/condutores' },
        { iconClass: 'bi bi-broadcast-pin', text: 'Vagas em Tempo Real', to: '/tempo-real' }
      ]
    }
  }
}
</script>

<style scoped>
.home-content {
  flex: 1;
  min-height: clamp(34rem, 62vh, 48rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4rem) 1rem;
}

.home-grid {
  display: grid;
  grid-template-columns: repeat(2, 220px);
  gap: 40px;
  justify-content: center;
}

@media (max-width: 575.98px) {
  .home-grid {
    grid-template-columns: 1fr;
    width: min(100%, 220px);
  }
}
</style>
