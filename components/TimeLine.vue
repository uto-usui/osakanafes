<template>
  <section class="time-line">
    <div class="tl__title-wrap">
      <titleLevel1 text="TIME TABLE +" />
    </div>
    <div class="tl__outer">
      <div class="tl__inner">
        <ul class="tl__time-list">
          <li v-for="item in 10" :key="`time${item}`" class="tl__time-item">
            <div class="tl__time-inner" v-text="item + 11" />
          </li>
        </ul>
        <div class="tl__places-wrap">
          <ul class="tl__places">
            <li
              v-for="(item, index) in data"
              :key="`place${index}`"
              class="tl_place"
            >
              <div class="tl_place-inner">
                <h3 class="tl__title" :class="[`tl__title--${item.place}`]">
                  <div
                    class="tl__title-inner"
                    :class="[`tl__title-inner--${item.place}`]"
                    v-html="
                      require(`~/assets/images/logo/${item.place}.svg?include`)
                    "
                  ></div>
                  <span class="is-sr-only" v-text="item.place" />
                </h3>
                <ul class="tl__bands" :class="[`tl__bands--${item.place}`]">
                  <li
                    v-for="(_item, _index) in item.band"
                    :key="`band${_index}`"
                    class="tl__band"
                    :class="[`tl__band--${item.place}`]"
                  >
                    <div class="tl__band-inner">
                      <time class="tl__band-time" v-text="_item.time" />
                      <h4 class="tl__band-name" v-text="_item.name" />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="tl__button-wrap">
        <a class="tl__button" href="/time.pdf" target="_blank">
          Time table PDF DOWNLOAD
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import data from '~/assets/json/time.json'
import TitleLevel1 from '~/components/TitleLevel1.vue'

export default {
  name: 'TimeLine',
  components: { TitleLevel1 },
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
$color-vijon: #69b4dc;
$color-hills: #fff;
$color-socore: #d64727;
$color-knave: #d12f7d;
$color-covent: #52b05f;

.time-line {
  width: 100%;
  overflow: hidden;
  //
  @include desktop {
    padding-right: $section-gutter-desktop;
    padding-left: $section-gutter-desktop;
  }
}

.tl__title-wrap {
  //
  @include touch {
    padding-left: 40px;
  }
  //
  @include desktop {
    margin-bottom: 7.5vw;
  }
}

.tl__outer {
  //
}

.tl__inner {
  position: relative;
  display: flex;
  width: 100%;
  //
  @include touch {
    overflow: hidden;
  }
}

.tl__time-list {
  width: 40px;
  padding-top: 55px;
  //
  @include desktop {
    position: absolute;
    top: 0;
    left: -60px;
    width: auto;
    padding-top: 67px;
    white-space: nowrap;
  }
  //
  //
  @include widescreen {
    padding-top: 77px;
  }
}

.tl__time-item {
  height: 70px;
  //
  @include desktop {
    height: 80px;
  }
  //
  @include fullhd {
    height: 100px;
  }
  //
  + .tl__time-item {
    margin-top: 70px;
    //
    //
    @include desktop {
      margin-top: 80px;
    }
    //
    @include fullhd {
      margin-top: 100px;
    }
  }
}

.tl__time-inner {
  font-size: 2.4rem;
  font-weight: bold;
  color: $color-primary;
  letter-spacing: 0.1em;
  //
  @include desktop {
    font-size: 3rem;
  }
}

.tl__places-wrap {
  width: calc(100vw - 40px);
}

.tl__places {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tl_place {
  //
  @include desktop {
    width: calc(199% / 5);
  }
  //
  + .tl_place {
    margin-left: 2px;
  }
}

.tl_place-inner {
  width: 140px;
  //
  @include desktop {
    width: 100%;
  }
}

.tl__title {
  display: flex;
  align-items: flex-end;
  height: 55px;
  //
  @include desktop {
    justify-content: center;
    height: 67px;
    margin-right: auto;
    margin-left: auto;
  }
  //
  @include widescreen {
    height: 77px;
  }
  //
  @include fullhd {
    // height: 232px;
  }
  //
  &--vijon {
    width: calc(100px * 1.2);
    //
    @include desktop {
      width: calc(100px * 1.6);
    }
    //
    //
    @include widescreen {
      width: calc(100px * 1.7);
    }
  }
  //
  &--hills {
    width: calc(95px * 1.2);
    //
    @include desktop {
      width: calc(95px * 1.5);
    }
    //
    //
    @include widescreen {
      width: calc(95px * 1.7);
    }
  }
  //
  &--socore {
    width: calc(45px * 1.2);
    //
    @include desktop {
      width: calc(45px * 1.5);
    }
    //
    //
    @include widescreen {
      width: calc(45px * 1.7);
    }
  }
  //
  &--knave {
    width: calc(90px * 1.2);
    //
    @include desktop {
      width: calc(90px * 1.5);
    }
    //
    //
    @include widescreen {
      width: calc(95px * 1.7);
    }
  }
  //
  &--covent {
    width: calc(35px * 1.2);
    //
    @include desktop {
      width: calc(35px * 1.5);
    }
    //
    //
    @include widescreen {
      width: calc(35px * 1.7);
    }
  }
}

.tl__title-inner {
  position: relative;
  width: 100%;
  height: 0;
  //
  &--vijon {
    bottom: -6px;
    padding-top: calc(100% * 24 / 120);
    //
    /deep/ .a {
      fill: $color-vijon;
    }
  }
  //
  &--hills {
    top: -2px;
    padding-top: calc(100% * 25 / 120);
    //
    /deep/ .a {
      fill: $color-hills;
    }
  }
  //
  &--socore {
    bottom: -2px;
    padding-top: calc(100% * 49 / 47);
    //
    /deep/ .a {
      fill: $color-socore;
    }
  }
  //
  &--knave {
    bottom: -1px;
    padding-top: calc(100% * 30 / 120);
    //
    /deep/ .a {
      fill: $color-knave;
    }
  }
  //
  &--covent {
    padding-top: calc(100% * 54 / 42);
    //
    /deep/ .a {
      fill: $color-covent;
    }
    //
    /deep/ .c {
      fill: none;
    }
  }
  //
  > /deep/ svg {
    @include overlay;
  }
}

.tl__bands {
  height: calc(70px * 10 * 2);
  //
  @include desktop {
    height: calc(80px * 10 * 2);
  }
  //
  @include fullhd {
    height: calc(100px * 10 * 2);
  }
  //
  &--vijon {
    background-color: rgba(lighten($color-vijon, 10%), 0.7);
  }
  //
  &--hills {
    padding-top: calc(70px * 10 / 30);
    background-color: rgba(lighten($color-hills, 10%), 0.7);
    //
    @include desktop {
      padding-top: calc(80px * 10 / 30);
    }
    //
    @include fullhd {
      padding-top: calc(100px * 10 / 30);
    }
  }
  //
  &--socore {
    padding-top: calc(70px * 30 / 30);
    background-color: rgba(lighten($color-socore, 10%), 0.7);
    //
    @include desktop {
      padding-top: calc(80px * 30 / 30);
    }
    //
    @include fullhd {
      padding-top: calc(100px * 30 / 30);
    }
  }
  //
  &--knave {
    padding-top: calc(70px * 20 / 30);
    background-color: rgba(lighten($color-knave, 10%), 0.7);
    //
    @include desktop {
      padding-top: calc(80px * 20 / 30);
    }
    //
    @include fullhd {
      padding-top: calc(100px * 20 / 30);
    }
  }
  //
  &--covent {
    background-color: rgba(lighten($color-covent, 10%), 0.7);
  }
}

.tl__band {
  //
  &--vijon {
    background-color: rgba($color-vijon, 1);
  }
  //
  &--hills {
    background-color: rgba($color-hills, 1);
  }
  //
  &--socore {
    background-color: rgba($color-socore, 1);
  }
  //
  &--knave {
    background-color: rgba($color-knave, 1);
  }
  //
  &--covent {
    background-color: rgba($color-covent, 1);
  }
  //
  + .tl__band {
    position: relative;
    margin-top: 70px;
    //
    @include desktop {
      margin-top: 80px;
    }
    //
    @include fullhd {
      margin-top: 100px;
    }
    //
    &::after {
      position: absolute;
      top: -2px;
      right: 0;
      left: 0;
      height: 2px;
      content: '';
      background-color: $color-black;
    }
    //
    &--hills {
      &::after {
        top: calc((70px * 10 / 30 + 2px) * -1);
        //
        @include desktop {
          top: calc((80px * 10 / 30 + 2px) * -1);
        }
        //
        @include fullhd {
          top: calc((100px * 10 / 30 + 2px) * -1);
        }
      }
    }
    //
    &--socore {
      &::after {
        top: calc((70px * 30 / 30 + 2px) * -1);
        //
        @include desktop {
          top: calc((80px * 30 / 30 + 2px) * -1);
        }
        //
        @include fullhd {
          top: calc((100px * 30 / 30 + 2px) * -1);
        }
      }
    }
    //
    &--knave {
      &::after {
        top: calc((70px * 20 / 30 + 2px) * -1);
        //
        @include desktop {
          top: calc((80px * 20 / 30 + 2px) * -1);
        }
        //
        @include fullhd {
          top: calc((100px * 20 / 30 + 2px) * -1);
        }
      }
    }
    //
    &--covent {
      margin-top: calc(70px / 3 * 2);
      //
      @include desktop {
        margin-top: calc(80px / 3 * 2);
      }
      //
      @include fullhd {
        margin-top: calc(100px / 3 * 2);
      }
      //
      &::after {
        display: none;
      }
      //
      &:nth-of-type(5) {
        &::after {
          top: calc((70px * 20 / 30 + 2px) * -1);
          display: block;
          //
          @include desktop {
            top: calc((80px * 20 / 30 + 2px) * -1);
          }
          //
          @include fullhd {
            top: calc((100px * 20 / 30 + 2px) * -1);
          }
        }
      }
      //
      &:nth-of-type(6) {
        &::after {
          top: calc((70px * 20 / 30 / 2 + 2px) * -1);
          display: block;
          //
          @include desktop {
            top: calc((80px * 20 / 30 / 2 + 2px) * -1);
          }
          //
          //
          @include fullhd {
            top: calc((100px * 20 / 30 / 2 + 2px) * -1);
          }
        }
      }
      //
      &:nth-of-type(7) {
        //
        &::after {
          // top: calc((70px * 20 / 30 + 2px) * -1);
          display: block;
          //
          @include desktop {
            // top: calc((80px * 20 / 30 + 2px) * -1);
          }
          //
          @include fullhd {
            // top: calc((100px * 20 / 30 + 2px) * -1);
          }
        }
      }
    }
  }
}

.tl__band-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  //
  @include desktop {
    height: 80px;
    box-shadow: 0 0 30px rgba($color-black, 0.25);
  }
  //
  @include fullhd {
    height: 100px;
  }
}

.tl__band-time {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba($color-black, 0.75);
  //
  @include desktop {
    font-size: 1.4rem;
  }
  //
  @include fullhd {
    font-size: 1.8rem;
  }
}

.tl__band-name {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.25;
  //
  @include widescreen {
    font-size: 1.6rem;
  }
  //
  @include fullhd {
    font-size: 2rem;
  }
}

.tl__button-wrap {
  padding-right: $section-gutter-mobile;
  padding-left: $section-gutter-mobile;
  margin-top: $section-gutter-mobile;
}

.tl__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-weight: bold;
  color: $color-black;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: $color-primary;
  //
  @include desktop {
    height: 75px;
    font-size: 2rem;
  }
}
</style>
