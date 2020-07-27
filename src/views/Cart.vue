<template>
  <div class="container">
    <h1 class="text-center pt-2 text-primary">
      Jūsų krepšelis
      <span v-if="items.length == 0">yra tuščias</span>
    </h1>
    <div v-if="items.length > 0">
      <div
        class="row align-items-center font-weight-bold text-primary border-bottom border-primary py-3 mt-2 mb-1"
      >
        <div class="offset-2 col-3">Pavadinimas</div>
        <div class="col-2">Vieneto kaina</div>
        <div class="col-1">Kiekis</div>
        <div class="col-2">Suma</div>
      </div>
      <cart-product class="mb-2" v-for="(item, i) in items" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/cart/CartProduct.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      items: "cart/getItems",
    })
  },
  components: {
    CartProduct
  }
};

</script>

<style>
</style>