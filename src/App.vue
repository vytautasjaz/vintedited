<template>
  <div id="app" class="app">
    <navbar-main />
    <router-view class="page" />
    <footer-main />
  </div>
</template>

<script>
  import NavbarMain from '@/components/partials/NavbarMain.vue';
  import FooterMain from '@/components/partials/FooterMain.vue';

  export default {
    components: {
      NavbarMain,
      FooterMain,
    },
  };
</script>

<style lang="scss">
.app {
        background-color: $gray-100;

}
  .page {
    min-height: calc(100vh - 6rem);

  }
</style>
