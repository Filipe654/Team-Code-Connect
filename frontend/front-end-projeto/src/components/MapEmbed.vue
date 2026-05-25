<template>
  <div class="map-frame" :title="title">
    <iframe
      class="map-iframe"
      :src="embedUrl"
      :title="title"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>

    <a class="map-link" :href="externalUrl" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-geo-alt-fill"></i>
      DSIN
    </a>
  </div>
</template>

<script>
export default {
  name: 'MapEmbed',
  props: {
    embedUrl: {
      type: String,
      default: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.169467664837!2d-49.93669422545869!3d-22.23364801415959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413090c94696dcdf%3A0xefb944e6cfcdbed5!2sDSIN%20Tecnologia%20da%20Informa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1776171291821!5m2!1spt-BR!2sbr'
    },
    externalUrl: {
      type: String,
      default: 'https://www.google.com/maps/search/?api=1&query=DSIN%20Tecnologia%20da%20Informa%C3%A7%C3%A3o%20Mar%C3%ADlia'
    },
    title: {
      type: String,
      default: 'Localização da DSIN Tecnologia da Informação'
    }
  }
}
</script>

<style scoped>
.map-frame {
  width: 100%;
  height: 100%;
  min-height: inherit;
  border-radius: inherit;
  overflow: hidden;
  position: relative;
  background-color: var(--color-white);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.map-link {
  position: absolute;
  left: 8px;
  bottom: 6px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.92);
  color: var(--color-dark);
  font-size: 0.7rem;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.map-link i {
  color: var(--color-danger);
}
</style>