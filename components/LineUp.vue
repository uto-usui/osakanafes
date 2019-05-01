<template>
  <div class="lineup">
    <titleLevel1 text="LINEUP +++" />
    <div
      v-for="(_item, _index) in bandsList"
      :key="`bands${_index}`"
      class="lineup__section"
    >
      <TitleLevel2 :text="`第${_index + 1}弾`" />
      <ul class="lineup__list">
        <li
          v-for="(item, index) in _item"
          :key="`band${index}`"
          class="lineup__item"
        >
          <a class="lineup__inner" target="_blank" :href="item.site">
            <figure class="lineup__figure">
              <img
                :src="require(`Images/band/${item.img}.jpg`)"
                :alt="`${item.name}`"
              />
              <figcaption>
                <h3 class="lineup__name" v-text="item.name" />
              </figcaption>
            </figure>
            <div class="lineup__bg" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import bandJson from '~/assets/json/band.json'
import TitleLevel1 from '~/components/TitleLevel1.vue'
import TitleLevel2 from '~/components/TitleLevel2.vue'

const bandsCount = 3
const bandsList = []
for (let i = 0; i < bandsCount; i++) {
  bandsList.push(bandJson.filter(band => band.vol === i + 1 + ''))
}

export default {
  name: 'LineUp',
  components: { TitleLevel2, TitleLevel1 },
  data() {
    return {
      bandsList,
    }
  },
}
</script>

<style lang="scss" scoped>
.lineup {
  position: relative;
  padding-top: 7.5vw;
  padding-bottom: 7.5vw;
  overflow: hidden;
  background: repeating-linear-gradient(
    -45deg,
    $color-primary,
    $color-primary 1vw,
    $color-black 0,
    $color-black 20vw
  );
  //
  @include section-default;
  //
  @include desktop {
    //
  }
}

.lineup__section {
  margin-top: 7.5vw;
}

.lineup__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //
  @include desktop {
    margin-bottom: calc(7.5vw / 3 * -1);
  }
  //
}

.lineup__item {
  width: 50%;
  //
  @include desktop {
    width: calc(100% / 3 - (7.5vw / 3 * 2 / 3));
    margin-bottom: calc(7.5vw / 3);
  }
}

.lineup__figure {
  position: relative;
  //
  img {
    //
  }
}

.lineup__bg {
  //
}

.lineup__inner {
  //
  &:hover {
    //
  }
}

.lineup__name {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: calc(100vw * 12 / 375);
  font-weight: bold;
  color: $color-primary;
  text-align: left;
  background-color: $color-black;
  //
  @include desktop {
    font-size: calc(100vw * 18 / 1024);
  }
}
</style>
