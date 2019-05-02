<template>
  <div class="lineup">
    <titleLevel1 text="LINEUP +++" />
    <div
      v-for="(_item, _index) in bandsList"
      :key="`bands${_index}`"
      class="lineup__section"
    >
      <TitleLevel2 :text="`第${_index + 1}弾`" />
      <ul :class="[`lineup__list--${_index + 1}`]" class="lineup__list">
        <LineUpItem
          v-for="(item, index) in _item"
          :key="`band${index}`"
          :item="item"
          :index="index"
          :get-page-width="getPageWidth"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import bandJson from '~/assets/json/band.json'
import TitleLevel1 from '~/components/TitleLevel1.vue'
import TitleLevel2 from '~/components/TitleLevel2.vue'
import LineUpItem from '~/components/LineUpItem.vue'

const bandsCount = 3
const bandsList = []
for (let i = 0; i < bandsCount; i++) {
  bandsList.push(bandJson.filter(band => band.vol === i + 1 + ''))
}

export default {
  name: 'LineUp',
  components: { LineUpItem, TitleLevel2, TitleLevel1 },
  props: {
    getPageWidth: {
      type: Number,
      default: 0,
    },
  },
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
  &--1 {
    //
  }
}
</style>
