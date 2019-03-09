<template>
  <section class="wrapper">
    <Hero />
    <About />
    <Support />
  </section>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'
import Support from '~/components/Support'

export default {
  components: {
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
