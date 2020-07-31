<template>
  <div class="container">
    <h1 class="text-center pt-2 text-primary">
      Jūsų krepšelis
      <span v-if="items.length == 0">yra tuščias</span>
    </h1>

    <div v-if="items.length > 0" class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Prekė</th>
            <th scope="col" class="text-center">Kiekis</th>
            <th scope="col" class="text-center">Vieneto kaina</th>
            <th scope="col" class="text-center">Bendra kaina</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <cart-product class="mb-2" v-for="(item, i) in items" :key="i" :item="item" />
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <strong>Bendra suma</strong>
            </td>
            <td class="text-center">
              <strong>0.00 €</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="col mb-2">
        <div class="row">
          <div class="col-sm-12 col-md-9"></div>
          <div class="col-sm-12 col-md-3 text-right">
            <button class="btn btn-lg btn-block btn-primary text-uppercase">Mokėti</button>
          </div>
        </div>
      </div>
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
    }),
  },
  components: {
    CartProduct,
  },
};
</script>

<style>
</style>