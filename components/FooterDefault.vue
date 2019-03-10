<template>
  <footer class="footer">
    <small>©️ osakana-fes.com</small>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
}
</script>

<style lang="scss" scoped>
.footer {
  height: $section-gutter-mobile;
  margin-top: calc(#{$section-gutter-mobile} * 2);
}
</style>
