<template>
  <g class="circle">
    <ellipse class="d" cx="329.48" cy="285.9" rx="150.28" ry="146.9" />
    <ellipse class="e" cx="329.48" cy="285.9" rx="117.31" ry="114.67" />
  </g>
</template>
<script>
export default {
  name: 'HeroCircle'
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
