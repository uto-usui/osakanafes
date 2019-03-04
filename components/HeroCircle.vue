<template>
  <g class="circle">
    <ellipse class="d z" cx="329.48" cy="285.9" rx="150.28" ry="146.9" />
    <ellipse class="e z" cx="329.48" cy="285.9" rx="117.31" ry="114.67" />
  </g>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
// import { randRange } from 'Js/math'

export default {
  name: 'HeroCircle',
  mounted() {
    this.animationInit()
  },
  methods: {
    animationInit() {
      const targets = this.$el.querySelectorAll('.z')
      // const vueThis = this

      TweenMax.set(targets, {
        opacity: 1,
        scale: 0,
        transformOrigin: '50% 50%',
      })

      TweenMax.staggerTo(
        targets,
        1.25,
        {
          scale: 1,
          ease: Expo.easeOut,
          onComplete() {
            // vueThis.morphing(this.target)
          },
        },
        0.5,
      )
    },
    // morphing(target) {
    //   const tl = new TimelineMax({
    //     repeat: -1,
    //     repeatDelay: randRange(5, 30),
    //     delay: randRange(5, 30),
    //   })
    //   tl.to(target, 0.8, {
    //     scale: 1.5,
    //     rotation: 10,
    //     ease: Power4.easeInOut,
    //   }).to(target, 0.4, {
    //     scale: 1,
    //     rotation: 0,
    //     ease: Sine.easeInOut,
    //   })
    // },
  },
}
</script>

<style lang="scss" scoped>
svg {
  //
}

.circle {
  //
}

.d {
  fill: $color-primary;
  stroke: $color-black;
  stroke-width: 14.72px;
}

.e {
  fill: $color-primary-light;
  stroke: $color-black;
  stroke-width: 29.44px;
}
</style>
