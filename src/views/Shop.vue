<template>
  <div class="container">
    <div class="text-center" v-if="isLoading">
      <img src="@/assets/img/loading.gif" alt="Shop">
    </div>
    <div class="grid" v-else>
      <shop-header />
      <shop-filter />
      <shop-items />
      <shop-pagination />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ShopHeader from "@/components/shop/ShopHeader.vue";
import ShopFilter from "@/components/shop/ShopFilter.vue";
import ShopItems from "@/components/shop/ShopItems.vue";
import ShopPagination from "@/components/shop/ShopPagination.vue";

export default {
  created(){
    this.$store.dispatch('shop/fetchItems', this.$route.query.category)
  },
  watch: {
    $route(to, from){
      to; from;
      this.$store.dispatch('shop/fetchItems', this.$route.query.category)
    }
  },
  computed: mapGetters({
    isLoading: 'shop/getIsLoading',
  }),
  components: {
    ShopHeader,
    ShopFilter,
    ShopItems,
    ShopPagination
  }
};

</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  padding-top: 1.5rem;
  grid-template:
    "filter header" 50px
    "filter list" auto
    "filter list" auto
    "filter pagination" auto
    / 3fr 10fr;
  gap: 1.25rem;
  margin-bottom: 5rem;
}
</style>