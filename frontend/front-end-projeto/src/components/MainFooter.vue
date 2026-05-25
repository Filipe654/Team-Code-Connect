<template>
  <footer class="main-footer">
    <div class="footer-left">
      <div class="footer-logo-box">
        <img src="@/assets/home/logo-footer.png" alt="DSIN" class="footer-logo" />
      </div>
      <small class="copyright">
        Copyright © 2026 Team Code Connect.<br />
        Todos os direitos reservados.
      </small>
    </div>

    <div class="footer-center">
      <div class="footer-columns">
        <div class="footer-column">
          <h4>Endereço</h4>
          <p>Rua Teste, 123</p>
          <p>DSIN Tecnologia</p>
          <p>Team Code Connect</p>
        </div>
        <div class="footer-column">
          <h4>Dúvidas</h4>
          <p>Suporte ACD</p>
          <p>Manual do usuário</p>
          <p>Assistência</p>
        </div>
        <div class="footer-column">
          <h4>Contatos</h4>
          <p>(14) 1234-5678</p>
          <p>contato@tcc.com</p>
          <p>contato@dsin.com</p>
        </div>
      </div>

      <div class="footer-map">
        <MapEmbed title="Localização da DSIN" />
      </div>
    </div>

    <div class="footer-right" aria-label="Redes sociais">
      <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" aria-label="X"><i class="bi bi-twitter-x"></i></a>
      <a href="#" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
      <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
    </div>
  </footer>
</template>

<script>
import MapEmbed from './MapEmbed.vue'

export default {
  name: 'MainFooter',
  components: { MapEmbed }
}
</script>

<style scoped>
.main-footer {
  width: 100%;
  background-color: var(--color-yellow);
  display: grid;
  grid-template-columns: 170px minmax(540px, 760px) 170px;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  padding: 18px 28px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
}

.footer-logo-box {
  background-color: var(--color-white);
  border-radius: 999px;
  padding: 8px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.footer-logo {
  width: 96px;
  object-fit: contain;
}

.copyright {
  color: var(--color-dark);
  font-size: 9px;
  line-height: 1.35;
}

.footer-center {
  width: 100%;
  min-height: 88px;
  border-radius: 16px;
  background-color: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 10px 18px;
}

.footer-columns {
  display: flex;
  align-items: flex-start;
  gap: 22px;
}

.footer-column h4 {
  color: var(--color-white);
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 6px;
}

.footer-column p {
  color: rgba(255, 255, 255, 0.78);
  font-size: 10px;
  font-weight: 700;
  margin: 0 0 3px;
  white-space: nowrap;
}

.footer-map {
  width: 300px;
  height: 68px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 14px;
  background-color: var(--color-white);
}

.footer-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding-right: 24px;
}

.footer-right a {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--color-dark);
  color: var(--color-yellow);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
}

.footer-right a:hover,
.footer-right a:focus-visible {
  background-color: var(--color-white);
  color: var(--color-dark);
}

@media (max-width: 1050px) {
  .main-footer {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 16px;
    text-align: center;
  }

  .footer-left {
    align-items: center;
  }

  .footer-center {
    width: min(100%, 760px);
  }

  .footer-right {
    justify-content: center;
    padding-right: 0;
  }
}

@media (max-width: 720px) {
  .footer-center {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-columns {
    justify-content: center;
    flex-wrap: wrap;
  }

  .footer-map {
    width: 100%;
    height: 150px;
  }
}
</style>
