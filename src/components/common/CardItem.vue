<template>
  <div
    class="card-item shadow-sm"
    @click="$router.push({ path: 'item/' + id })"
  >
    <div class="card-item__user d-flex align-items-center">
      <img src="~@/assets/img/home/user.png" />
      <div class="card-item__username">{{ username }}</div>
    </div>
    <div>
      <img :src="img" />
    </div>
    <div class="card-item__info">
      <div class="card-item__price">{{ price }}</div>

      <div class="text-muted">{{ size }} / {{ width }} / {{ height }}</div>
      <div class="card-item__brand">{{ brand }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'id',
      'img',
      'price',
      'size',
      'height',
      'width',
      'brand',
      'username',
    ],
  };
</script>

<style scoped lang="scss">
  .card-item {
    background-color: white;
    width: 100%;
    height: 100%;
    cursor: pointer;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    &__price {
      font-weight: bold;
      font-size: 1.17rem;
      &:after {
        content: ' €';
      }
    }
    .price + * {
      font-style: italic;
    }
    &__brand {
      font-weight: bold;
    }
    &__user {
      img {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        border: 0.5px solid $gray-300;
      }
      padding: 4px;
    }
    &__username {
      margin-left: 10px;
      font-size: 15px;
      color: $gray-500;
    }
    &__info{
      padding:4px;  
    }
  }
</style>
