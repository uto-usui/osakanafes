<template>
  <section v-if="!getLoader" class="wrapper">
    <Hero />
    <About />
    <Support />
    <FooterDefault />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import Hero from '~/components/Hero'
import About from '~/components/About'
import Support from '~/components/Support'
import FooterDefault from '~/components/FooterDefault'

import HeadMixin from '~/mixins/Head'

export default {
  components: {
    FooterDefault,
    Support,
    About,
    Hero,
  },
  mixins: [HeadMixin],
  computed: {
    ...mapGetters(['getLoader']),
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  overflow: hidden;
  background-color: $color-primary-light;
}
</style>
