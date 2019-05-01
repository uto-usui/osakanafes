<template>
  <h2 class="title1" v-html="text" />
</template>
<script lang="ts">
export default {
  name: 'TitleLevel1',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.title1 {
  padding-bottom: 0.1em;
  margin-bottom: -0.1em;
  font-size: 9vw;
  font-weight: bold;
  color: $color-primary;
  text-align: left;
  white-space: nowrap;
  //
  @include desktop {
    margin-bottom: -0.15em;
  }
  //
  @include widescreen {
    font-size: 4vw;
  }
}
</style>
