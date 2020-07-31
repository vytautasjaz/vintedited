<template>
    <div class="row shadow-sm p-3 order__main mt-3">
      <div class="col">
        <div class="d-flex justify-content-between">
          <h3 class="mb-3">Užsisakyti</h3>
          <h2 class="text-primary">{{ item.price.toFixed(2) }} &euro;</h2>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group m-0">
              <label for="#count">Kiekis:</label>
              <input
                type="number"
                id="count"
                class="form-control"
                v-model="count"
                :readonly="item.inStock <= 0"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group m-0">
              <label>Kaina be PVM:</label>
              <div class="py-2">
                <strong>{{ totalWithoutVat }} &euro;</strong>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group m-0">
              <label>Viso:</label>
              <div class="py-2">
                <strong>{{ total }} &euro;</strong>
              </div>
            </div>
          </div>
          <!-- <div class="col align-self-end">
            <button
              class="btn btn btn-secondary w-100"
              :disabled="item.inStock <= 0"
            >
              Užsisakyti
            </button>
          </div>-->
          <div class="col align-self-end">
            <button
              class="btn btn btn-primary w-100"
              :disabled="item.inStock <= 0"
              @click="
                addItems({
                  ...item,
                  count: Number(count),
                },)"
            >Dėti į krepšelį</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["item"],
  computed: {
    total() {
      return (this.item.price * this.count).toFixed(2);
    },
    totalWithoutVat() {
      return (this.total / (1 + this.item.vat / 100)).toFixed(2);
    }
  },
  data() {
    return {
      count: this.item.inStock > 0 ? 1 : 0
    };
  },
  methods: {
    ...mapActions({
      addItems: "cart/addItems"
    })
  }
};
</script>

<style lang="scss" scoped>
.order__main {
  background-color: white;
}
</style>
