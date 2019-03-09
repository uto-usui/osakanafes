<template>
  <div class="hero">
    <HeroLogo />
    <HeroWave />
    <p ref="text">
      真夏の大阪・堀江の街に活きの良いお魚(バンド&SSW)集まりました！ <br>
      soratobiwoが2019年から立ち上げた堀江を舞台にした5会場ライブサーキット！ <br>
      あなた好みのお魚(バンド&SSW)を探して美味しく召し上がれ！(ライブ楽しんでね！)
    </p>
  </div>
</template>

<script>
import HeroLogo from '~/components/HeroLogo'
import HeroWave from '~/components/HeroWave'

export default {
  components: { HeroWave, HeroLogo },
  props: {
    //
  },
  mounted() {
    //
  },
}
</script>

<style lang="scss" scoped>
.hero {
  //
}
</style>
