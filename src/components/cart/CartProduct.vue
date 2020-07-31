<template>
  <tr>
    <td>
      <img :src="item.img" class="cart-item__img" />
    </td>
    <td class="align-middle">{{item.name}}</td>
    <td class="text-center align-middle">{{item.count}}</td>
    <td class="text-center align-middle">{{item.price}} €</td>
    <td class="text-center align-middle">{{totalPrice}} €</td>
    <td class="text-center align-middle">
      <div class="d-flex justify-content-between">
        <div class="btn btn-sm btn-primary" @click="inc(item.id)">+</div>
        <div class="btn btn-sm btn-secondary" @click="dec(item.id)">-</div>
        <div class="btn btn-sm btn-danger" @click="remove(item.id)">X</div>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["item"],
  computed: {
    totalPrice() {
      return (this.item.price * this.item.count).toFixed(2);
    },
  },
  methods: mapMutations("cart", {
    inc: "INC",
    dec: "DEC",
    remove: "REMOVE",
  }),
};
</script>

<style lang="scss" scoped>
.cart-item {
  &__img {
    height: 120px;
  }
  .btn {
    height: 2rem;
    width: 2rem;
  }
}
</style>

