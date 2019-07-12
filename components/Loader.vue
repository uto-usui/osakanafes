<template>
  <div :class="[{ 'is-hide': !getLoader }]" class="loader">
    <div class="loader__inner">
      <span
        v-for="(item, index) in text"
        ref="text"
        :key="`text${index}`"
        style="display: inline-block"
      >
        <span>{{ item }}</span>
      </span>
    </div>
    <div ref="bg" class="loader__bg" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { TimelineMax, Expo } from 'gsap'

export default {
  name: 'Loader',
  components: {},
  data() {
    return {
      text: [...'osakanafes - 2019.7.14'],
    }
  },
  computed: {
    ...mapGetters(['getPageReady', 'getLoader']),
  },
  mounted() {
    this.$nextTick(() => {
      this.animationInit()
    })
  },
  methods: {
    ...mapActions(['setLoader']),
    animationInit() {
      // TweenMax.staggerTo(
      //   this.$refs.text,
      //   0.5,
      //   {
      //     scale: 1.2,
      //     repeat: 20,
      //   },
      //   0.5,
      // )

      const tl = new TimelineMax({
        delay: 0.5,
        onComplete: () => {
          this.setLoader(false)
        },
      })

      tl.staggerTo(
        this.$refs.text,
        0.75,
        {
          y: '-55vh',
          ease: Expo.easeInOut,
        },
        0.02,
      ).to(this.$refs.bg, 0.75, {
        scaleY: 0,
        ease: Expo.easeInOut,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  //
  &.is-hide {
    pointer-events: none;
  }
}

.loader__bg {
  z-index: 5;
  background-color: $color-black;
  transform-origin: top center;
  //
  @include overlay;
}

.loader__inner {
  z-index: 9;
  font-size: 5vw;
  font-weight: bold;
  color: $color-primary;
  letter-spacing: 0.2em;
}
</style>
