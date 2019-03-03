<template>
  <div class="hero">
    <HeroLogo />
    <HeroWave />
  </div>
</template>

<script>
import HeroLogo from '~/components/HeroLogo'
import HeroWave from '~/components/HeroWave'

export default {
  components: { HeroWave, HeroLogo },
  props: {
    //
  },
}
</script>

<style lang="scss" scoped>
.hero {
  //
}
</style>
