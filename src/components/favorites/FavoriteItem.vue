<template>
  <div class="cart-item row align-items-center">
    <div class="col-2">
      <img :src="item.img" class="cart-item__img" alt="title" />
    </div>
    <div class="col-4">{{item.name}}</div>
    <div class="col-4">{{item.price}} €</div>
    <div class="col-2">
      <div class="d-flex justify-content-between">
        <div class="btn btn-sm btn-primary" @click="$emit('add-item-to-cart', item.id)">Dėti į krepšelį</div>
        <div class="btn btn-sm btn-danger" @click="remove(item.id)">X</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["item"],
  methods: mapMutations("cart", {
    remove: "REMOVE"
  })
};
</script>

<style lang="scss" scoped>
.cart-item {
  height: 150px;
  &__img {
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
  .btn-mini {
    height: 2rem;
    width: 2rem;
  }
}
</style>

