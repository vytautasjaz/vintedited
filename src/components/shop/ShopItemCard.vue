<template>
  <div class="card shadow-sm">
    <img
      class="product__image"
      :src="img"
      @click="$router.push({ path: '/item/' + id })"
      :alt="name"
    />
    <div class="product__info mb-2">
      <div
        class="h6 m-0 product__name"
        @click="$router.push({ path: '/item/' + id })"
      >
        {{ name }}
      </div>
      <div class="price">{{ price }}</div>
    </div>
    <div class="d-flex justify-content-between">
      <a
        class="btn btn-outline-secondary btn-sm"
        @click="$emit('toggle-favorite', id)"
      >
        Pažymėti
      </a>
      <a
        class="btn btn-primary btn-sm text-white"
        @click="$emit('add-item-to-cart', id)"
        >Dėti į krepšelį</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: ['id', 'img', 'name', 'price'],
  };
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    padding: 1rem;
    & > img {
      margin: 1.5rem 0 0.5rem;
      height: 240px;
      object-fit: cover;
    }
    .product {
      &__image {
        cursor: pointer;
      }
      &__name {
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: $primary;
        }
      }
      &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .card.out-of-stock {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba($white, 0.3);
    }
    .price {
      position: absolute;
      top: 0.5rem;
      right: 1rem;
      font-size: 1.25rem;
      font-weight: bold;
      color: $primary;
      &:after {
        content: ' €';
      }
    }
  }
</style>
