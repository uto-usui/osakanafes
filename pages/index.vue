<template>
  <section class="wrapper">
    <Hero />
  </section>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  components: {
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
