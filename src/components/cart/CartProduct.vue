<template>
  <div class="cart-item row align-items-center">
    <div class="col-2">
      <img :src="item.img" class="cart-item__img" alt="title" />
    </div>
    <div class="col-3">{{item.name}}</div>
    <div class="col-2">{{item.price}} €</div>
    <div class="col-1">{{item.count}}</div>
    <div class="col-2">{{totalPrice}} €</div>
    <div class="col-2">
      <div class="d-flex justify-content-between">
        <div class="btn btn-sm btn-primary" @click="inc(item.id)">+</div>
        <div class="btn btn-sm btn-secondary" @click="dec(item.id)">-</div>
        <div class="btn btn-sm btn-danger" @click="remove(item.id)">X</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations} from 'vuex';

export default {
  props: ['item'],
  computed:{
    totalPrice(){
      return (this.item.price * this.item.count).toFixed(2)
    }
  },
  methods: mapMutations('cart', {
    inc: 'INC',
    dec: 'DEC',
    remove: 'REMOVE'
  }),
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
  .btn {
    height: 2rem;
    width: 2rem;
  }
}
</style>

