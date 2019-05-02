<template>
  <section class="about">
    <AboutWave />
    <AboutContent :get-page-width="getPageWidth" />
  </section>
</template>

<script>
import AboutWave from '~/components/AboutWave'
import AboutContent from '~/components/AboutContent'

export default {
  name: 'About',
  components: { AboutContent, AboutWave },
  props: {
    getPageWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      detail: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  //
}

.about__fes {
  //
}

.about__detail {
  //
}
</style>
