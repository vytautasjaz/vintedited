<template>
  <div class="container">
    <h1 class="text-center pt-2 text-primary">
      Pažymėtos prekės
      <span v-if="items.length == 0">nepasirinktos</span>
    </h1>
    <div v-if="items.length > 0">
      <div
        class="row align-items-center font-weight-bold text-primary border-bottom border-primary py-3 mt-2 mb-1"
      >
        <div class="offset-2 col-4">Pavadinimas</div>
        <div class="col-1">Kaina</div>
      </div>
      <favorite-item
        class="mb-2"
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        @add-item-to-cart="addToCartById"
      />
    </div>
  </div>
</template>

<script>
import FavoriteItem from "@/components/favorites/FavoriteItem.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      items: "favorites/getFavoriteItems",
    }),
    mutations: {
      ...mapMutations({
        addItems: "cart/ADD_ITEMS",
      }),
      addToCartById(id) {
        const item = this.items.find((el) => el.id === id);
        this.addItems({
          ...item,
          count: 1,
        });
      },
    },
  },
  components: {
    FavoriteItem,
  },
};
</script>

<style>
</style>