<template>
  <div class="about-section">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'AboutSection',
}
</script>
<style lang="scss" scoped>
.about-section {
  //
  + .about-section {
    margin-top: 7.5vw;
    //

    @include widescreen {
      width: calc(50% - 7.5vw / 2);
      margin-top: 0;
    }
  }
}
</style>
