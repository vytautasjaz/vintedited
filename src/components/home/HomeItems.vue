<template>
  <div class="grid">
    <card-item
      v-for="{id, img, price, size, height, width, brand, username} in items"
      :key="id"
      :id="id"
      :img="img"
      :price="price"
      :size="size"
      :height="height"
      :width="width"
      :brand="brand"
      :username="username"
    />
  </div>
</template>

<script>
import CardItem from "@/components/common/CardItem.vue";
export default {
  props: ["items"],
  components: {
    CardItem
  }
};
</script>

<style scoped lang="scss">
.grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 400px;
  gap: 1rem;
}
</style>
