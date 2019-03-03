<template>
  <div class="hero-logo">
    <svg viewBox="0 0 635.44 601.85">
      <title>hero</title>
      <g class="a">
        <HeroBubble />
        <HeroCircle />
        <HeroSakana />
        <HeroTeri />
        <HeroSoratobiwo />
        <HeroTextCircle />
        <HeroTextGiza />
        <HeroText />
        <HeroFestival />
        <HeroOsaka />
        <HeroLine />
      </g>
    </svg>
  </div>
</template>

<script>
import HeroBubble from '~/components/HeroBubble'
import HeroCircle from '~/components/HeroCircle'
import HeroSakana from '~/components/HeroSakana'
import HeroTeri from '~/components/HeroTeri'
import HeroSoratobiwo from '~/components/HeroSoratobiwo'
import HeroTextCircle from '~/components/HeroTextCircle'
import HeroTextGiza from '~/components/HeroTextGiza'
import HeroText from '~/components/HeroText'
import HeroFestival from '~/components/HeroFestival'
import HeroOsaka from '~/components/HeroOsaka'
import HeroLine from '~/components/HeroLine'

export default {
  name: 'HeroLogo',
  components: {
    HeroLine,
    HeroOsaka,
    HeroFestival,
    HeroText,
    HeroTextGiza,
    HeroTextCircle,
    HeroSoratobiwo,
    HeroTeri,
    HeroSakana,
    HeroCircle,
    HeroBubble,
  },
}
</script>


<style lang="scss" scoped>
.hero-logo {
  margin-top: -20vw;
  margin-right: -25vw;
  margin-left: -25vw;
  //
  @include desktop {
    margin-top: -17vw;
    margin-right: 10vw;
    margin-left: 10vw;
  }
  //
  @include widescreen {
    margin-top: -15vw;
  }
}

svg {
  //
}

.teri {
  //
}

.a {
  isolation: isolate;
}

.c {
  fill: $color-primary-dark;
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

.g {
  fill: none;
  stroke: $color-primary-light;
  stroke-width: 13.42px;
}

.h {
  fill: none;
  stroke: $color-primary-light;
  stroke-linecap: round;
}
</style>
