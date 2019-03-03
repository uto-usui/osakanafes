<template>
  <g class="text-circle">
    <path class="i" d="M199.78,409.35A54.68,54.68,0,1,1,145.09,464,54.68,54.68,0,0,1,199.78,409.35Zm-5.55,49.47a22.7,22.7,0,1,0,22.7-22.69A22.7,22.7,0,0,0,194.23,458.82Z" />
    <path class="k" d="M194.67,555.5a16.43,16.43,0,1,1,23.23,0A16.43,16.43,0,0,1,194.67,555.5Zm11.69-9.34a6.82,6.82,0,1,0-9.65,0A6.82,6.82,0,0,0,206.36,546.16Z" />
    <path class="l" d="M225.91,580.05a17.09,17.09,0,1,1,24.16,0A17.08,17.08,0,0,1,225.91,580.05Zm19.77-7.6a11.64,11.64,0,1,0-16.46,0A11.63,11.63,0,0,0,245.68,572.45Z" />
    <path class="m" d="M244.06,562.73a7.24,7.24,0,1,1-7.95-6.46A7.26,7.26,0,0,1,244.06,562.73Z" />
  </g>
</template>
<script>
export default {
  name: 'HeroTextCircle'
}
</script>
<style lang="scss" scoped>
svg {
  //
}

.text-circle {
  //
}

.i {
  fill: $color-primary;
}

.k {
  fill: $color-black;
  stroke: $color-black;
  stroke-miterlimit: 10;
  stroke-width: 4.79px;
  // stroke-width: 0.34px;
}

.l {
  fill: $color-black;
  stroke: $color-black;
  stroke-width: 0.35px;
}

.m {
  mix-blend-mode: multiply;
  fill: $color-primary;
}
</style>
