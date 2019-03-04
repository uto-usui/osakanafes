<template>
  <g class="text">
    <g>
      <polygon class="z i" points="430.65 502.57 476.78 516.8 476.78 502.58 430.65 502.57" />
      <polygon class="z i" points="476.78 531.15 486.95 531.15 486.99 452.27 442.3 531.15 453.04 531.15 476.8 489.2 476.78 531.15" />
    </g>
    <path class="z n" d="M278.31,518.94a37.49,37.49,0,0,1-10.16-1.23,21.56,21.56,0,0,1-7.3-3.5,15.44,15.44,0,0,1-4.53-5.5,19.46,19.46,0,0,1-1.83-7.25h4.14A15.9,15.9,0,0,0,261,507.9a13.29,13.29,0,0,0,4.27,4.08,17.8,17.8,0,0,0,5.78,2.15,36.23,36.23,0,0,0,6.91.63,26.44,26.44,0,0,0,6.88-.82,16.06,16.06,0,0,0,5.24-2.35,10.77,10.77,0,0,0,3.32-3.72,10.23,10.23,0,0,0,1.15-4.89,10.67,10.67,0,0,0-1-4.84,8.89,8.89,0,0,0-3.35-3.43,25.89,25.89,0,0,0-6.21-2.62c-2.56-.76-5.74-1.55-9.55-2.35a51.84,51.84,0,0,1-8.08-2.41,21.29,21.29,0,0,1-5.58-3.17,11.32,11.32,0,0,1-3.24-4.13,13.07,13.07,0,0,1-1-5.42,13.31,13.31,0,0,1,1.41-6.12,13.94,13.94,0,0,1,4-4.76,19,19,0,0,1,6.23-3.09,27.4,27.4,0,0,1,8-1.1,30,30,0,0,1,8.06,1,20.66,20.66,0,0,1,6.41,3,15.58,15.58,0,0,1,6.62,11h-4a13.72,13.72,0,0,0-1.88-4.29,12.52,12.52,0,0,0-3.38-3.43,16.39,16.39,0,0,0-4.92-2.25,23.85,23.85,0,0,0-6.51-.81q-7.69,0-11.65,2.82a9,9,0,0,0-3.95,7.75,9.66,9.66,0,0,0,.73,3.92,7.69,7.69,0,0,0,2.49,3,17,17,0,0,0,4.63,2.36A55.41,55.41,0,0,0,276,485.5c1.68.35,3.4.71,5.18,1.1s3.52.84,5.21,1.36a31.14,31.14,0,0,1,4.84,1.94,15.38,15.38,0,0,1,4,2.82,12.61,12.61,0,0,1,2.73,4,13.67,13.67,0,0,1,1,5.52,14.7,14.7,0,0,1-1.55,6.72,16.06,16.06,0,0,1-4.29,5.29,20.17,20.17,0,0,1-6.54,3.45A26.6,26.6,0,0,1,278.31,518.94Z" />
    <polygon class="z m" points="313.74 489.2 289.98 531.15 313.72 531.15 313.74 489.2" />
    <polygon class="z o" points="313.72 531.15 323.89 531.15 323.93 452.27 279.25 531.15 289.98 531.15 313.74 489.2 313.72 531.15" />
    <g>
      <polygon class="z o" points="425.31 502.57 471.45 516.8 471.45 502.58 425.31 502.57" />
      <polygon class="z o" points="471.45 531.15 481.62 531.15 481.65 452.27 436.97 531.15 447.7 531.15 471.47 489.2 471.45 531.15" />
    </g>
    <HeroTextLine />
    <path class="z f" d="M342.28,483.79h-6.45V511h-7V452.27h7v26.16h6.28L361,452.27h8l-20.71,27.92L371.62,511h-8.8Z" />
    <polyline class="z p" points="413.5 531.15 413.5 445.64 448.1 489.81 448.1 416.38" />
    <g>
      <polygon class="z o" points="386.78 506.02 372.55 531.15 386.77 531.15 386.78 506.02" />
      <polygon class="z o" points="391.56 531.15 401.73 531.15 401.76 452.27 357.08 531.15 367.81 531.15 391.58 489.2 391.56 531.15" />
    </g>
    <line class="z q" x1="191.49" y1="532.25" x2="191.49" y2="583.36" />
    <polyline class="z q" points="191.86 552.77 213.12 571.05 213.12 583.36" />
    <line class="z q" x1="281.42" y1="532.25" x2="281.42" y2="583.36" />
    <polyline class="z q" points="281.79 552.77 303.05 571.05 303.05 583.36" />
    <path class="z r" d="M273.31,580.62a11.87,11.87,0,0,0,3.19-5.75H275a8.25,8.25,0,0,1-1.77,2.66,8.18,8.18,0,1,1,0-11.57,8.36,8.36,0,0,1,1.77,2.66h1.3a12,12,0,1,0-3,12Z" />
    <polyline class="z q" points="287.63 557.77 303.51 538.66 303.51 531.15" />
  </g>
</template>
<script>
import HeroTextLine from '~/components/HeroTextLine'

import { TweenMax, Back, TimelineMax, Power4, Sine } from 'gsap'
import { randRange } from 'Js/math'

export default {
  name: 'HeroText',
  components: { HeroTextLine },
  mounted() {
    this.animationInit()
  },
  methods: {
    animationInit() {
      const targets = this.$el.querySelectorAll('.z')
      const vueThis = this

      TweenMax.set(targets, {
        opacity: 1,
        scale: 0,
        rotation: 30,
        transformOrigin: '50% 50%',
      })

      TweenMax.staggerTo(
        targets,
        0.5,
        {
          scale: 1,
          rotation: 0,
          ease: Back.easeOut.config(2),
          onComplete() {
            vueThis.morphing(this.target)
          },
        },
        0.1,
      )
    },
    morphing(target) {
      const tl = new TimelineMax({
        repeat: -1,
        repeatDelay: randRange(5, 30),
        delay: randRange(5, 30),
      })
      tl.to(target, 0.8, {
        scale: 1.5,
        rotation: 10,
        ease: Power4.easeInOut,
      }).to(target, 0.4, {
        scale: 1,
        rotation: 0,
        ease: Sine.easeInOut,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  //
}

.text {
  //
}

.f {
  fill: $color-black;
}

.i {
  fill: $color-primary;
}

.m {
  mix-blend-mode: multiply;
  fill: $color-primary;
}

.n {
  stroke: $color-black;
  stroke-width: 2.53px;
}

.o {
  fill: $color-black;
}

.p {
  fill: none;
  stroke: $color-black;
  stroke-width: 12.66px;
}

.q {
  fill: none;
  stroke: $color-black;
  stroke-width: 5.6px;
}

.r {
  fill: $color-black;
  stroke: $color-black;
  stroke-width: 0.25px;
}
</style>
