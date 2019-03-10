<template>
  <div>
    <Loader />
    <Nuxt />
  </div>
</template>

<script>
import Loader from '~/components/Loader'

import { mapActions } from 'vuex'

export default {
  components: { Loader },
  mounted() {
    this.$nextTick(() => {
      this.setPageReady(true)
    })
  },
  methods: {
    ...mapActions(['setPageReady']),
  },
}
</script>

<style lang="scss">
@import '~Sass/foundation/_reset';
@import '~Sass/foundation/base/_base';
@import '~Sass/object/utility/_utility';
</style>
