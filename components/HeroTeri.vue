<template>
  <g class="teri">
    <path class="h" d="M407.55,232.84s9.59,1,10.55,41.22" />
    <path class="h" d="M283.41,188.27s1,24-27.8,34" />
    <path class="h" d="M256.57,327.75s-20.82,9-24,27.8" />
    <path class="h" d="M294.92,328.7s10.65,20.14,20.13,23" />
    <path class="h" d="M346.2,325.35s6.71,18.21,15.34,19.17" />
    <path class="h" d="M411.87,323s15.81,13.42,13.9,34.51" />
    <path class="h" d="M368.73,183s32.59,5.27,28.76,25.88" />
  </g>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  name: 'HeroTeri',
  mounted() {
    this.animationInit()
  },
  methods: {
    animationInit() {
      const targets = this.$el.querySelectorAll('.h')
      // const vueThis = this

      ;[...targets].forEach(el => {
        const len = el.getTotalLength()

        TweenMax.set(el, {
          opacity: 1,
          strokeDasharray: len,
          strokeDashoffset: len,
        })

        TweenMax.to(el, 0.8, {
          strokeDashoffset: 0,
          delay: 2.2,
          ease: Expo.easeInOut,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  //
}

.teri {
  //
}

.h {
  opacity: 0;
  fill: none;
  stroke: $color-primary-light;
  stroke-width: 4.79px;
}
</style>
