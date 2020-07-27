<template>
  <div>
    <shop-filter-categories/>
  </div>
</template>

<script>
import ShopFilterCategories from "./ShopFilterCategories.vue";

export default {
  components: {
    ShopFilterCategories,
  }
};
</script>



<style lang="scss" scoped>
.grid__filter {
  grid-area: filter;
}
</style>


