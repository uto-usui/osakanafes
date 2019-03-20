<template>
  <div class="about__inner">
    <div class="about__section">
      <h2 class="about__title">
        OSAKANA FES … ?
      </h2>
      <div class="about__box">
        <p>真夏の大阪・堀江の街に</p>
        <p>
          活きの良いお魚
          <small>(バンド&SSW)</small>
          集まりました！
        </p>
        <p>soratobiwoが2019年から立ち上げた</p>
        <p>堀江を舞台にした5会場ライブサーキット！</p>
        <p>
          あなた好みのお魚
          <small>(バンド&SSW)</small>
          を探して
        </p>
        <p>
          美味しく召し上がれ！
          <small>(ライブ楽しんでね！)</small>
        </p>
      </div>
    </div>
    <div class="about__section">
      <div class="about__section">
        <h2 class="about__title">
          DETAILS ///
        </h2>
        <div class="about__box">
          <dl>
            <dt>堀江 お魚ロックフェスティバル 2019</dt>
            <dd>2019.7.14 SUN</dd>
            <dt>TIME</dt>
            <dd>
              リストバンド引換 11:00 <br>
              START 12:00
            </dd>
            <dt>PLACE</dt>
            <dd>
              北堀江club vijon<br>
              南堀江Knave<br>
              hills パン工場<br>
              SOCORE FACTORY<br>
              covent garden
            </dd>
            <dt>ACT</dt>
            <dd>全48組(予定)</dd>
            <dt>TICKET</dt>
            <dd>¥3500 (1d別)</dd>
            <dt>TWITTER</dt>
            <dd>
              <a href="https://twitter.com/osakanafes" target="_blank">
                @osakanafes
              </a>
            </dd>
            <dt>CONTACT</dt>
            <dd>
              <a href="mailto:osakana.fes19@gmail.com">
                osakana.fes19@gmail.com
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutContent',
}
</script>
<style lang="scss" scoped>
.about__inner {
  padding-bottom: 7.5vw;
  background-color: $color-black;
  //
  @include section-default;
  //
  @include widescreen {
    display: flex;
  }
}

.about__section {
  //
  + .about__section {
    margin-top: 7.5vw;
    //

    @include widescreen {
      width: calc(50% - 7.5vw / 2);
      margin-top: 0;
      margin-left: 7.5vw;
    }
  }
}

.about__title {
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

.about__box {
  padding: calc(7.5vw / 2);
  font-size: 1.3rem;
  line-height: 1.75;
  text-align: left;
  background-color: $color-primary;
  //
  @include tablet {
    font-size: 1.8rem;
  }
  //
  @include widescreen {
    font-size: 1.6rem;
  }
  //
  p {
    //
  }
  //
  small {
    //
  }
  //
  dl {
    //
  }
  //
  dt {
    font-weight: bold;
    //
    @include tablet {
      font-size: 1.2em;
    }
  }

  //
  dd {
    //
    + dt {
      margin-top: 1em;
    }
  }
  //
  a {
    transition: all 0.2s $easeInOutSine;
    //
    &:hover {
      color: $color-primary;
      background-color: $color-black;
    }
  }
}
</style>
