<template>
  <div class="app-frame">
    <MainHeader />
    <main class="app-main">
      <slot />
    </main>
    <MainFooter v-if="footer" />
  </div>
</template>

<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'

export default {
  name: 'AppShell',
  components: {
    MainHeader,
    MainFooter
  },
  props: {
    footer: {
      type: Boolean,
      default: true
    }
  }
}
</script>
