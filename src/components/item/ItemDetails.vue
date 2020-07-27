<template>
  <div class="row">
    <div
      :class="{ 'out-of-stock': item.inStock <= 0 }"
      error-msg="Parduota"
      class="col-9 d-flex"
    >
      <div class="col-6 p-0">
        <div>
          <img class="img" :src="item.img" />
        </div>
      </div>
      <div class="col-6 d-flex p-0">
        <div class="col-6 p-0">
          <div>
            <img class="img" :src="item.img" />
          </div>
          <div>
            <img class="img" :src="item.img" />
          </div>
        </div>
        <div class="col-6 p-0">
          <div>
            <img class="img" :src="item.img" />
          </div>
          <div>
            <img class="img" :src="item.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-3 property__box">
      <h3>{{ item.price.toFixed(2) }} &euro;</h3>
      <hr />
      <ul class="properties">
        <li class="property">
          <span class="property__name">Būklė:</span>
          <span class="property__value">{{ item.state }}</span>
        </li>
        <li class="property">
          <span class="property__name">Dydis:</span>
          <span class="property__value"
            >{{ item.size }} / {{ item.width }} / {{ item.height }}</span
          >
        </li>
        <li class="property">
          <span class="property__name">PVM:</span>
          <span class="property__value">{{ item.vat }} %</span>
        </li>
        <li class="property">
          <span class="property__name">Liko vienetų:</span>
          <span class="property__value">{{ item.inStock }}</span>
        </li>
      </ul>
      <hr />
      <h4>{{ item.name }}</h4>
      <p>{{ item.description }}</p>
      <!-- v-bind:class="{ 'btn-outline-secondary': favoriteItem, 'btn-secondary': !favoriteItem}" -->

      <button
        class="btn btn-outline-secondary  w-100 my-1"
        v-bind:class="{ 'btn-secondary': isFavored}"
        @click="
          toggleFavorite({
            ...item,
          })"
      >
        {{isFavored? 'nebemegti': 'megti'}}
      </button>
    </div>
  </div>
</template>

<script>
  import {  mapMutations } from 'vuex';

  export default {
    name: 'item-details',
    props: ['item'],
    data() {
      return {
        count: this.item.inStock > 0 ? 1 : 0,
      };
    },
    computed: {
      isFavored(){
        console.log(this.item.id)
        return this.$store.getters['favorites/getFavoriteItemById'](this.item.id) 
      }
    },
    methods: {
      ...mapMutations({
        toggleFavorite: 'favorites/TOGGLE_FAVORITE',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .out-of-stock {
    margin: 0;
    padding: 0;
    position: relative;
    height: 100%;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 5;
      color: $danger;
      font-size: 4rem;
      font-weight: bold;
      content: attr(error-msg);
      transform: translate(40%, 10%) rotate(-30deg);
    }
    &:after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 4px solid $danger;
      background: rgba($gray-100, 0.4);
    }
  }
  .img {
    display: block;
    width: 100%;
    object-fit: cover;
    margin-right: 2rem;
    border: 1px solid $white;
  }
  .properties {
    padding: 0;
    list-style: none;
  }
  .property {
    margin-bottom: 0.5rem;
    display: flex;
    &__name {
      width: 120px;
      flex-grow: 100px;
      font-size: 13px;
      color: $gray_500;
      text-align: left;
      text-transform: uppercase;
    }
    &__value {
      font-size: 13px;
      text-transform: uppercase;
      width: 100%;
      margin-left: 0.5rem;
    }
    &__box {
      background-color: $white;
      padding: 15px;
      box-shadow: 1px 1px 2px #cacaca;
    }
  }
</style>
