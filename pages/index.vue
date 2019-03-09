<template>
  <section class="wrapper">
    <Hero />
    <About />
  </section>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'

export default {
  components: {
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
