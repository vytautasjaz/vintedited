<template>
  <div class="container">
    <home-hero />
    <home-items :items="items"/>
  </div>
</template>

<script>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeItems from '@/components/home/HomeItems.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeItems
  }, 
  computed: {
    ...mapGetters({
      items: 'shop/getHomeItems'
    })
  }

}
</script>

<style lang="scss" scoped>

</style>



