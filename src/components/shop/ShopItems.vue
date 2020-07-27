<template>
  <div class="grid__list">
    <div class="products-container">
      <shop-item-card
        v-for="{ id, img, name, price } in items"
        :id="id"
        :key="id"
        :img="img"
        :name="name"
        :price="price"
        @add-item-to-cart="addToCartById"
        @toggle-favorite="toggleFavoriteById"
      />
    </div>
  </div>
</template>

<script>
  import ShopItemCard from '@/components/shop/ShopItemCard.vue';
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    components: {
      ShopItemCard,
    },
    computed: {
      ...mapGetters({
        items: 'shop/getSelectedItems',
      }),
    },
    methods: {
      ...mapMutations({
        addItems: 'cart/ADD_ITEMS',
        toggleFavorite: 'favorites/TOGGLE_FAVORITE',
      }),
      addToCartById(id) {
        const item = this.items.find((el) => el.id === id);
        this.addItems({
          ...item,
          count: 1,
        });
      },
      toggleFavoriteById(id) {
        const item = this.items.find((el) => el.id === id);
        this.toggleFavorite({
          ...item,
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .grid__list {
    grid-area: list;
    .products-container {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
