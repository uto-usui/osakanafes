<template>
  <polygon class="u" points="302.42 584.11 299.81 601.85 491.28 601.85 493.88 584.11 302.42 584.11" />
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  name: 'HeroLine',
  mounted() {
    this.animationInit()
  },
  methods: {
    animationInit() {
      this.animationFirst()
    },
    animationFirst() {
      TweenMax.set(this.$el, {
        opacity: 1,
        scaleX: 0,
        transformOrigin: '0% 50%',
      })

      TweenMax.to(this.$el, 2, {
        scaleX: 1,
        ease: Expo.easeInOut,
        delay: 2,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  //
}

.u {
  mix-blend-mode: multiply;
  opacity: 0;
  fill: rgba(195, 191, 142, 1);
}
</style>
