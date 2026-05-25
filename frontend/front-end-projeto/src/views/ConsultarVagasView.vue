<template>
  <AppShell>
    <section class="vacancy-page page-section">
      <aside class="filter-panel dark-panel">
        <h1>Consultar Vagas</h1>

        <label class="search-field">
          <i class="bi bi-search"></i>
          <input v-model="search" type="text" placeholder="Pesquisar endereço ou região" />
        </label>

        <div class="filter-buttons">
          <button :class="{ active: statusFilter === '' }" @click="statusFilter = ''">Todas</button>
          <button :class="{ active: statusFilter === 'available' }" @click="statusFilter = 'available'">Disponíveis</button>
          <button :class="{ active: statusFilter === 'occupied' }" @click="statusFilter = 'occupied'">Ocupadas</button>
        </div>

        <div class="spot-list">
          <button
            v-for="spot in filteredSpots"
            :key="spot.id"
            :class="['spot-card', { active: selectedSpot && selectedSpot.id === spot.id }]"
            type="button"
            @click="selectedSpot = spot"
          >
            <span>
              <strong>{{ spot.name }}</strong>
              <small>{{ spot.address }}</small>
            </span>
            <i :class="spot.status === 'available' ? 'bi bi-check-circle-fill success' : 'bi bi-x-circle-fill danger'"></i>
          </button>
        </div>
      </aside>

      <main class="map-column">
        <section class="vacancy-map map-art">
          <span class="map-label" style="left: 18%; top: 8%">Centro</span>
          <span class="map-label" style="left: 58%; top: 12%">Hospital</span>
          <span class="map-label" style="right: 8%; bottom: 5%">Industrial</span>

          <button
            v-for="spot in filteredSpots"
            :key="spot.id"
            :class="['pin', { danger: spot.status === 'occupied', active: selectedSpot && selectedSpot.id === spot.id }]"
            :style="{ left: `${spot.x}%`, top: `${spot.y}%` }"
            type="button"
            @click="selectedSpot = spot"
          >
            <i :class="spot.status === 'available' ? 'bi bi-p-circle-fill' : 'bi bi-x-lg'"></i>
            <span>{{ spot.status === 'available' ? `${spot.available} Vagas` : 'LOTADO' }}</span>
          </button>

          <i class="bi bi-car-front-fill car-marker" style="left: 51%; top: 56%"></i>
        </section>

        <article v-if="selectedSpot" class="details-card light-panel">
          <div>
            <h2>{{ selectedSpot.name }}</h2>
            <p>{{ selectedSpot.address }}</p>
          </div>
          <strong :class="selectedSpot.status === 'available' ? 'status-pill status-success' : 'status-pill status-danger'">
            {{ selectedSpot.status === 'available' ? `${selectedSpot.available} vagas livres` : 'Lotado' }}
          </strong>
          <router-link v-if="selectedSpot.status === 'available'" to="/agendamento" class="btn btn-acd-primary">Agendar</router-link>
        </article>
      </main>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { parkingSpots } from '../data/mockData'

export default {
  name: 'ConsultarVagasView',
  components: { AppShell },
  data() {
    return {
      search: '',
      statusFilter: '',
      spots: parkingSpots,
      selectedSpot: parkingSpots[0]
    }
  },
  computed: {
    filteredSpots() {
      const term = this.search.toLowerCase()
      return this.spots.filter((spot) => {
        const matchText = `${spot.name} ${spot.region} ${spot.address}`.toLowerCase().includes(term)
        const matchStatus = this.statusFilter ? spot.status === this.statusFilter : true
        return matchText && matchStatus
      })
    }
  }
}
</script>

<style scoped>
.vacancy-page {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 1.5rem;
  min-height: 640px;
}

.filter-panel {
  padding: 1rem;
}

.filter-panel h1 {
  font-size: 1.45rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.search-field {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 42px;
  border-radius: 10px;
  background: var(--color-white);
  color: var(--color-dark);
  padding: 0 0.75rem;
  margin-bottom: 1rem;
}

.search-field input {
  width: 100%;
  background: transparent;
  color: var(--color-dark);
  border: 0;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.filter-buttons button {
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  background: rgba(255, 255, 255, 0.16);
  color: var(--color-white);
}

.filter-buttons button.active {
  background: var(--color-yellow);
  color: var(--color-dark);
  font-weight: 800;
}

.spot-list {
  display: grid;
  gap: 0.65rem;
}

.spot-card {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  text-align: left;
}

.spot-card.active {
  outline: 3px solid var(--color-yellow);
}

.spot-card span {
  display: grid;
}

.spot-card small {
  opacity: 0.8;
}

.success {
  color: var(--color-success);
}

.danger {
  color: var(--color-danger);
}

.map-column {
  display: grid;
  grid-template-rows: minmax(440px, 1fr) auto;
  gap: 1rem;
}

.vacancy-map {
  border-radius: var(--radius-large);
  min-height: 480px;
  box-shadow: 0 8px 18px rgba(57, 69, 78, 0.12);
}

.details-card {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.details-card h2 {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
}

.details-card p {
  margin: 0;
}

@media (max-width: 900px) {
  .vacancy-page {
    grid-template-columns: 1fr;
  }

  .details-card {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
