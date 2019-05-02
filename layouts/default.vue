<template>
  <div>
    <Loader />
    <Nuxt />
  </div>
</template>

<script>
import Loader from '~/components/Loader'

import { mapActions } from 'vuex'

import data from '~/assets/js/data'

export default {
  components: { Loader },
  mounted() {
    this.$nextTick(() => {
      data.init()
      this.setPageData(data)
      this.setPageReady(true)
    })
  },
  methods: {
    ...mapActions(['setPageReady', 'setPageData']),
  },
}
</script>

<style lang="scss">
@import '~Sass/foundation/_reset';
@import '~Sass/foundation/base/_base';
@import '~Sass/animation/_keyframes';
@import '~Sass/object/utility/_utility';
</style>
