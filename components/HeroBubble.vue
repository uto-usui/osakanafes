<template>
  <g class="bubble">
    <g>
      <g class="b">
        <path
          class="c"
          d="M499.33,246.2a15.25,15.25,0,1,0,16.73-13.61A15.24,15.24,0,0,0,499.33,246.2Z"
        />
        <path
          class="c"
          d="M563.55,163.63a36,36,0,1,0,39.55-32.16A36.05,36.05,0,0,0,563.55,163.63Z"
        />
        <path
          class="c"
          d="M628.64,235.23A16.63,16.63,0,1,1,613.8,217,16.62,16.62,0,0,1,628.64,235.23Z"
        />
        <path
          class="c c4"
          d="M592.08,265.5a26.33,26.33,0,1,1-23.5-28.89A26.31,26.31,0,0,1,592.08,265.5Z"
        />
        <path
          class="c"
          d="M509.06,314.08a16.63,16.63,0,1,1-14.84-18.25A16.62,16.62,0,0,1,509.06,314.08Z"
        />
        <path
          class="c"
          d="M525,375.63A9.7,9.7,0,1,1,516.35,365,9.68,9.68,0,0,1,525,375.63Z"
        />
      </g>
      <g class="b">
        <path
          class="c"
          d="M492,166.89a6.29,6.29,0,1,0,5-7.35A6.3,6.3,0,0,0,492,166.89Z"
        />
        <path
          class="c"
          d="M507.71,126.69a14.88,14.88,0,1,0,11.89-17.36A14.89,14.89,0,0,0,507.71,126.69Z"
        />
        <path
          class="c"
          d="M541.86,147.41a6.87,6.87,0,1,1-8-5.49A6.87,6.87,0,0,1,541.86,147.41Z"
        />
        <path
          class="c"
          d="M530.93,163.67A10.87,10.87,0,1,1,518.25,155,10.86,10.86,0,0,1,530.93,163.67Z"
        />
        <path
          class="c"
          d="M503.75,192.62a6.87,6.87,0,1,1-8-5.49A6.86,6.86,0,0,1,503.75,192.62Z"
        />
        <path
          class="c"
          d="M517.27,215.11a4,4,0,1,1-4.68-3.2A4,4,0,0,1,517.27,215.11Z"
        />
      </g>
    </g>
    <g>
      <g class="b">
        <path
          class="c"
          d="M207.89,209.44a23.28,23.28,0,1,1-25.55-20.78A23.3,23.3,0,0,1,207.89,209.44Z"
        />
        <path
          class="c"
          d="M109.8,83.33A55,55,0,1,1,49.4,34.21,55.06,55.06,0,0,1,109.8,83.33Z"
        />
        <path
          class="c"
          d="M10.39,192.68A25.4,25.4,0,1,0,33.05,164.8,25.38,25.38,0,0,0,10.39,192.68Z"
        />
        <path
          class="c"
          d="M66.22,238.93a40.22,40.22,0,1,0,35.89-44.13A40.19,40.19,0,0,0,66.22,238.93Z"
        />
        <path
          class="c"
          d="M193,313.12a25.4,25.4,0,1,0,22.67-27.88A25.38,25.38,0,0,0,193,313.12Z"
        />
        <path
          class="c"
          d="M146.05,348.84a14.82,14.82,0,1,0,13.23-16.26A14.78,14.78,0,0,0,146.05,348.84Z"
        />
      </g>
      <g class="b">
        <path
          class="c"
          d="M219.16,88.3a9.61,9.61,0,1,1-7.69-11.21A9.62,9.62,0,0,1,219.16,88.3Z"
        />
        <path
          class="c"
          d="M195.08,26.9A22.72,22.72,0,1,1,176.92.39,22.72,22.72,0,0,1,195.08,26.9Z"
        />
        <path
          class="c"
          d="M142.93,58.55a10.49,10.49,0,1,0,12.24-8.38A10.49,10.49,0,0,0,142.93,58.55Z"
        />
        <path
          class="c"
          d="M159.62,83.39A16.61,16.61,0,1,0,179,70.13,16.6,16.6,0,0,0,159.62,83.39Z"
        />
        <path
          class="c"
          d="M201.14,127.6a10.48,10.48,0,1,0,12.23-8.38A10.48,10.48,0,0,0,201.14,127.6Z"
        />
        <path
          class="c"
          d="M180.49,162a6.12,6.12,0,1,0,7.14-4.89A6.11,6.11,0,0,0,180.49,162Z"
        />
      </g>
    </g>
  </g>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  name: 'HeroBubble',
  mounted() {
    this.animationInit()
  },
  methods: {
    animationInit() {
      const targets = this.$el.querySelectorAll('.c')
      const vueThis = this

      TweenMax.set(targets, {
        opacity: 1,
        scale: 0,
        transformOrigin: '50% 50%',
      })

      TweenMax.to(targets, 1, {
        scale: 1,
        ease: Expo.easeInOut,
        onComplete() {
          vueThis.morphing(this.target)
        },
      })
    },
    morphing(targets) {
      TweenMax.fromTo(
        targets,
        2,
        {
          scale: 1,
        },
        {
          scale: 0.8,
          repeat: -1,
          yoyo: true,
        },
      )
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  //
}

.bubble {
  //
}

.c {
  opacity: 0;
  fill: $color-primary-dark;
}
</style>
