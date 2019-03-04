<template>
  <g>
    <rect class="m" x="328.87" y="452.27" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="459.24" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="466.21" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="473.17" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="480.14" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="487.11" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="494.07" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="501.04" width="59.64" height="2.94" />
    <rect class="m" x="328.87" y="508" width="59.64" height="2.94" />
  </g>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
// import { randRange } from 'Js/math'

export default {
  name: 'HeroTextLine',
  mounted() {
    this.animationInit()
  },
  methods: {
    animationInit() {
      const targets = this.$el.querySelectorAll('.m')
      const vueThis = this

      TweenMax.set(targets, {
        opacity: 1,
        scaleX: 0,
        transformOrigin: '0% 50%',
      })

      TweenMax.staggerTo(
        targets,
        1.25,
        {
          scaleX: 1,
          ease: Expo.easeInOut,
          onComplete() {
            vueThis.hide(this.target)
          },
        },
        0.2,
      )
    },
    hide(target) {
      const vueThis = this

      TweenMax.to(target, 2, {
        scaleX: 0,
        ease: Expo.easeInOut,
        delay: 4,
        onComplete() {
          vueThis.show(this.target)
        },
      })
    },
    show(target) {
      const vueThis = this

      TweenMax.to(target, 1.25, {
        scaleX: 1,
        ease: Expo.easeInOut,
        onComplete() {
          vueThis.hide(this.target)
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  //
}

.m {
  mix-blend-mode: multiply;
  opacity: 0;
  fill: $color-primary;
}
</style>
