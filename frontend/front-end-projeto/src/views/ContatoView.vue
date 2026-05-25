<template>
  <AppShell>
    <section class="page-section contact-page">
      <article class="contact-panel dark-panel">
        <h1>Contato</h1>
        <p><i class="bi bi-geo-alt-fill"></i> Rua Hipotética, 67 - DSIN Tecnologia</p>
        <p><i class="bi bi-envelope-fill"></i> contato@teamcodeconnect.com.br</p>
        <p><i class="bi bi-telephone-fill"></i> (14) 4002-8922</p>
        <p><i class="bi bi-clock-fill"></i> Atendimento em horário comercial - 8:00 às 22:00</p>
      </article>
    </section>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'ContatoView',
  components: { AppShell }
}
</script>

<style scoped>
.contact-page {
  min-height: 620px;
  display: grid;
  place-items: center;
}

.contact-panel {
  width: min(100%, 560px);
  padding: clamp(1.25rem, 4vw, 2rem);
}

.contact-panel h1 {
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: center;
}

.contact-panel p {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.05rem;
  margin-bottom: 0.85rem;
}

.contact-panel i {
  color: var(--color-yellow);
}
</style>
