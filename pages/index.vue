<template>
  <section class="wrapper">
    <Hero />
    <About />
    <Support />
    <FooterDefault />
  </section>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'
import Support from '~/components/Support'
import FooterDefault from '~/pages/FooterDefault'

export default {
  components: {
    FooterDefault,
    Support,
    About,
    Hero,
  },
  computed: {
    //
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
