<template>
  <AppShell>
    <section class="realtime-page">
      <header class="realtime-toolbar">
        <div>
          <h1>Vagas em Tempo Real</h1>
          <p>{{ availableCount }} vagas livres monitoradas agora</p>
        </div>

        <select v-model="selectedRegion" class="form-select form-field">
          <option value="">Todas as regiões</option>
          <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
        </select>
      </header>

      <section class="real-map map-art">
        <button
          v-for="spot in filteredSpots"
          :key="spot.id"
          :class="['pin', { danger: spot.status === 'occupied' }]"
          :style="{ left: `${spot.x}%`, top: `${spot.y}%` }"
          type="button"
          :title="spot.region"
        >
          <i :class="spot.status === 'available' ? 'bi bi-p-circle-fill' : 'bi bi-x-lg'"></i>
          <span>{{ spot.status === 'available' ? `${spot.available} Vagas` : 'LOTADO' }}</span>
        </button>

        <i v-for="car in cars" :key="car.x + car.y" class="bi bi-car-front-fill car-marker" :style="{ left: car.x, top: car.y }"></i>
        <span class="map-label" style="left: 8%; top: 35%">Centro<br>Comercial</span>
        <span class="map-label" style="left: 34%; top: 65%">Hospital<br>Unimar</span>
        <span class="map-label" style="right: 13%; top: 71%">Distrito<br>Industrial</span>
      </section>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { realtimeSpots } from '../data/mockData'

export default {
  name: 'TempoRealView',
  components: { AppShell },
  data() {
    return {
      selectedRegion: '',
      spots: realtimeSpots,
      cars: [
        { x: '25%', y: '35%' },
        { x: '42%', y: '61%' },
        { x: '55%', y: '52%' },
        { x: '68%', y: '42%' },
        { x: '28%', y: '70%' }
      ]
    }
  },
  computed: {
    regions() {
      return [...new Set(this.spots.map((spot) => spot.region))]
    },
    filteredSpots() {
      return this.selectedRegion ? this.spots.filter((spot) => spot.region === this.selectedRegion) : this.spots
    },
    availableCount() {
      return this.filteredSpots.reduce((total, spot) => total + spot.available, 0)
    }
  }
}
</script>

<style scoped>
.realtime-page {
  min-height: 720px;
  display: grid;
  grid-template-rows: auto 1fr;
}

.realtime-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  background-color: var(--color-white);
}

.realtime-toolbar h1 {
  margin: 0;
  color: var(--color-dark);
  font-size: 1.8rem;
  font-weight: 800;
}

.realtime-toolbar p {
  margin: 0;
  color: #59636a;
}

.realtime-toolbar select {
  width: min(100%, 240px);
}

.real-map {
  min-height: 600px;
}

@media (max-width: 575.98px) {
  .realtime-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .realtime-toolbar select {
    width: 100%;
  }
}
</style>
