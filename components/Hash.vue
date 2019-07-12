<template>
  <a
    :href="
      `https://twitter.com/intent/tweet?button_hashtag=%E3%81%8A%E9%AD%9A%E3%83%95%E3%82%A7%E3%82%B9&ref_src=twsrc%5Etfw`
    "
    class="hash"
    target="_blank"
  >
    <span class="hash__inner">
      ♯お魚フェス
    </span>
    <span class="hash__bg" />
  </a>
</template>

<script>
export default {
  name: 'Hash',
  data() {
    return {
      //
    }
  },
}
</script>

<style lang="scss" scoped>
.hash {
  position: fixed;
  top: 0;
  right: -10px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: $color-black;
  letter-spacing: 0.05em;
  //
  @include desktop {
    right: -15px;
    font-size: 1.6rem;
  }
}

.hash__bg {
  z-index: 5;
  transform: skewX(30deg);
  //
  @include overlay;
  //
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -3px;
    z-index: 1;
    display: inline-block;
    content: '';
    background-color: $color-black;
  }
  //
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    display: inline-block;
    content: '';
    background-color: $color-primary;
  }
}

.hash__inner {
  position: relative;
  z-index: 9;
  padding: 0.75em 1.75em 0.75em 1.5em;
  //
  @include desktop {
    padding: 1em 3em 1em 2.5em;
  }
}
</style>
