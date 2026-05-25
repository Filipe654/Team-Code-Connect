<template>
  <AppShell>
    <section class="page-section dashboard-page">
      <header class="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Resumo operacional das áreas de carga e descarga.</p>
        </div>
        <button class="btn btn-acd-primary" type="button" @click="refreshData">
          <i class="bi bi-arrow-clockwise"></i> Atualizar dados
        </button>
      </header>

      <div class="metrics-grid">
        <article v-for="metric in metrics" :key="metric.title" class="metric-card">
          <i :class="metric.icon"></i>
          <span>{{ metric.title }}</span>
          <strong>{{ metric.value }}</strong>
        </article>
      </div>

      <div class="dashboard-grid">
        <section class="light-panel p-3 p-md-4">
          <h2>Vagas por região</h2>
          <div class="table-responsive">
            <table class="table table-acd table-striped align-middle">
              <thead>
                <tr>
                  <th>Região</th>
                  <th>Total</th>
                  <th>Livres</th>
                  <th>Ocupadas</th>
                  <th>Taxa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in regions" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.total }}</td>
                  <td>{{ item.available }}</td>
                  <td>{{ item.busy }}</td>
                  <td>{{ item.rate }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <aside class="side-panels">
          <section class="dark-panel side-card">
            <h2>Fluxo do sistema</h2>
            <p><span>Veículos cadastrados</span><strong>{{ vehicles.length }}</strong></p>
            <p><span>Agendamentos</span><strong>{{ schedules.length }}</strong></p>
            <p><span>Multas em aberto</span><strong>{{ fines.length }}</strong></p>
          </section>

          <section class="dark-panel side-card">
            <h2>Áreas críticas</h2>
            <p v-for="item in critical" :key="item.name">
              <span>{{ item.name }}</span>
              <strong>{{ item.rate }}%</strong>
            </p>
          </section>
        </aside>
      </div>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'
import { getVehicles, getFines, getSchedules, getParkingSpots } from '../data/storage'

export default {
  name: 'DashboardView',
  components: { AppShell },
  data() {
    return {
      vehicles: getVehicles(),
      fines: getFines(),
      schedules: getSchedules(),
      spots: getParkingSpots()
    }
  },
  computed: {
    monitoredTotal() {
      return this.spots.reduce((total, spot) => total + Math.max(spot.available, 1) + (spot.status === 'occupied' ? 8 : 4), 0)
    },
    availableTotal() {
      return this.spots.reduce((total, spot) => total + spot.available, 0)
    },
    busyTotal() {
      return Math.max(this.monitoredTotal - this.availableTotal, 0)
    },
    occupationRate() {
      return this.monitoredTotal ? Math.round((this.busyTotal / this.monitoredTotal) * 100) : 0
    },
    metrics() {
      return [
        { title: 'Vagas monitoradas', value: String(this.monitoredTotal), icon: 'bi bi-p-square-fill' },
        { title: 'Disponíveis', value: String(this.availableTotal), icon: 'bi bi-check-circle-fill' },
        { title: 'Ocupadas', value: String(this.busyTotal), icon: 'bi bi-x-circle-fill' },
        { title: 'Taxa de ocupação', value: `${this.occupationRate}%`, icon: 'bi bi-graph-up-arrow' }
      ]
    },
    regions() {
      const grouped = {}
      this.spots.forEach((spot) => {
        if (!grouped[spot.region]) grouped[spot.region] = { name: spot.region, total: 0, available: 0, busy: 0 }
        grouped[spot.region].available += spot.available
        grouped[spot.region].busy += spot.status === 'occupied' ? 8 : 4
        grouped[spot.region].total = grouped[spot.region].available + grouped[spot.region].busy
      })
      return Object.values(grouped).map((item) => ({
        ...item,
        rate: item.total ? Math.round((item.busy / item.total) * 100) : 0
      }))
    },
    critical() {
      return this.regions
        .map((item) => ({ name: item.name, rate: item.rate }))
        .sort((a, b) => b.rate - a.rate)
        .slice(0, 3)
    }
  },
  methods: {
    refreshData() {
      this.vehicles = getVehicles()
      this.fines = getFines()
      this.schedules = getSchedules()
      alert('Dados do sistema atualizados.')
    }
  }
}
</script>

<style scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.dashboard-header h1 {
  color: var(--color-dark);
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.dashboard-header p {
  margin: 0;
  color: #59636a;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.metric-card {
  border-radius: var(--radius-large);
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 1rem;
  display: grid;
  gap: 0.25rem;
}

.metric-card i {
  color: var(--color-yellow);
  font-size: 1.6rem;
}

.metric-card span {
  font-size: 0.85rem;
}

.metric-card strong {
  font-size: 1.8rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 1.5rem;
}

.light-panel h2,
.side-card h2 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.side-panels {
  display: grid;
  gap: 1rem;
}

.side-card {
  padding: 1rem;
}

.side-card p {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.65rem;
}

.side-card strong {
  color: var(--color-yellow);
}

@media (max-width: 900px) {
  .metrics-grid,
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-header {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
