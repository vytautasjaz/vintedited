<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <item-details :item="item" />
        <item-order-panel :item="item" />
      </div>
    </div>
    <div class="row pt-5">
      <!-- <item-group-similar /> -->
    </div>
  </div>
</template>

<script>
import ItemDetails from "@/components/item/ItemDetails.vue";
// import ItemGroupSimilar from "@/components/item/ItemGroupSimilar.vue";
import ItemOrderPanel from "@/components/item/ItemOrderPanel.vue";

export default {
  props: ["id"],
  computed: {
    item() {
      return this.$store.getters['shop/getItemById'](this.id);
    }
  },
  components: {
    ItemDetails,
    // ItemGroupSimilar,
    ItemOrderPanel
  }
};
</script>

<style lang="scss" scoped>

</style>