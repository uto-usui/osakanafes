<script>
/**
 * default meta
 * @type {{img: string, description: string, title: string, ogType: string}}
 */
const meta = {
  title: 'osakana fes - soratobiwo presents',
  description:
    '2019年7月14日(日)に全50組の出演を予定している大阪・堀江 「お魚ロックフェスティバル」を開催します。soratobiwoが2019年から立ち上げた堀江を舞台にした5会場ライブサーキット！',
  img: 'https://osakana-fes.com/ogp.png',
  ogType: 'website',
}

export default {
  /**
   * Meta information of each page
   * Insert from data {title, description, ogType}
   */
  head() {
    return {
      title: this.title || meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.desc || meta.description,
        },
        {
          name: 'og:title',
          content: this.title || meta.title,
        },
        {
          name: 'og:description',
          content: this.desc || meta.description,
        },
        { name: 'og:locale', content: 'ja_JP' },
        { name: 'og:type', content: this.ogType || meta.ogType },
        { name: 'og:url', content: 'https://osakana-fes.com/' },
        {
          name: 'og:image',
          content: meta.img,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: this.title || meta.title,
        },
        {
          name: 'twitter:description',
          content: this.desc || meta.description,
        },
        {
          name: 'twitter:image',
          content: meta.img,
        },
        { name: 'twitter:site', content: '@osakana_fes' },
      ],
    }
  },
}
</script>
