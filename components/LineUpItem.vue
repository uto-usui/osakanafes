<template>
  <li :class="[{ 'is-show': show }]" class="lineup__item">
    <a class="lineup__inner" target="_blank" :href="item.site">
      <figure class="lineup__figure">
        <img
          class="lineup__img"
          :src="require(`Images/band/${item.img}.jpg`)"
          :alt="`${item.name}`"
        />
        <figcaption class="lineup__caption">
          <h3 class="lineup__name" v-text="item.name" />
        </figcaption>
      </figure>
      <div class="lineup__overlay" />
    </a>
  </li>
</template>

<script>
import scrollama from 'scrollama'

export default {
  name: 'LineUpItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
    getPageWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      show: false,
      scroller: null,
    }
  },
  watch: {
    getPageWidth() {
      this.scroller.resize()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollamaInit()
    })
  },
  beforeDestroy() {
    this.scroller && this.scroller.destroy()
  },
  methods: {
    scrollamaInit() {
      this.scroller = scrollama()
      this.scroller
        .setup({
          step: this.$el,
          // once: true,
          offset: 0.9,
        })
        .onStepEnter(this.stepEnterHandler)
        .onStepExit(this.stepExitHandler)
    },
    stepEnterHandler({ element, index, direction }) {
      this.show = true
    },
    stepExitHandler({ element, index, direction }) {
      direction === 'up' && (this.show = false)
    },
  },
}
</script>

<style lang="scss" scoped>
.lineup__item {
  width: 50%;
  //
  @include desktop {
    width: calc(100% / 3 - (7.5vw / 3 * 2 / 3));
    margin-bottom: calc(7.5vw / 3);
    //
    .lineup__list.lineup__list--1 & {
      width: calc(100% / 2 - (7.5vw / 3 / 2));
    }
  }
}

.lineup__figure {
  position: relative;
  overflow: hidden;
  //
}

.lineup__img {
  transition: transform 1.5s $easeFadeIn;
  transform: translateY(100%) scaleY(2);
  transform-origin: top center;
  //
  .lineup__item.is-show & {
    transform: translateY(0) scaleY(1);
  }
}

.lineup__inner {
  position: relative;
  display: block;
  box-shadow: 0 0 0 rgba($color-primary, 1);
  transition: all 0.2s $easeOutSine;
  //
  &:hover {
    box-shadow: 10px 10px 0 rgba($color-primary, 1);
    transform: translate3d(-10px, -10px, 0);
  }
}

.lineup__overlay {
  background-color: $color-primary;
  mix-blend-mode: multiply;
  transition: transform 1s 0.2s $easeInOutExpo;
  transform-origin: left center;
  //
  @include overlay;
  //
  .lineup__item.is-show & {
    transform: scaleX(0);
  }
}

.lineup__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: $color-black;
  transition: transform 1s 0.2s $easeInOutExpo;
  transform: translateX(-100%);
  //
  .lineup__item.is-show & {
    transform: translateX(0);
  }
}

.lineup__name {
  font-size: calc(100vw * 12 / 375);
  font-weight: bold;
  color: $color-primary;
  text-align: left;
  transition: transform 1.25s 0.5s $easePowerInOut;
  transform: translateX(-100%);
  //
  @include desktop {
    font-size: calc(100vw * 18 / 1024);
  }
  //
  .lineup__item.is-show & {
    transform: translateX(0);
  }
}
</style>
