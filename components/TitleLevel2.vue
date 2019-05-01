<template>
  <div class="title2__wrap">
    <h3 class="title2">
      <div class="title2__bg" />
      <div class="title2__inner" v-html="text" />
    </h3>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TitleLevel2',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.title2__wrap {
  //
}

.title2 {
  position: relative;
  width: 30vw;
  height: 30vw;
  margin-right: auto;
  margin-left: auto;
  //
  @include desktop {
    width: 18vw;
    height: 18vw;
  }
}

.title2__inner {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(100vw * 18 / 375);
  font-weight: bold;
  color: $color-primary;
  //
  @include overlay;
  //
  @include desktop {
    font-size: calc(100vw * 32 / 1024);
  }
}

.title2__bg {
  z-index: 1;
  background-color: $color-black;
  border-radius: 50%;
  //
  @include overlay;
  //
  &::after {
    z-index: 1;
    content: '';
    background-color: $color-primary;
    border-radius: inherit;
    //
    @include overlay(2vw);
    //
    @include desktop {
      @include overlay(1vw);
    }
  }
  //
  &::before {
    z-index: 2;
    content: '';
    background-color: $color-black;
    border-radius: inherit;
    //
    @include overlay(4vw);
    //
    @include desktop {
      @include overlay(2vw);
    }
  }
}
</style>
