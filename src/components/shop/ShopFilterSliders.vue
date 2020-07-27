<template>
  <div class="accordion" id="price-accordion">
    <div class="bg-light">
      <div
        data-toggle="collapse"
        data-target="#price"
        class="btn btn-primary dropdown-toggle w-100 text-left"
      >Kaina</div>
      <slider-double
        :min="price.min"
        :max="price.max"
        :selected="price.selected"
        v-on:values-changed="handlePrice"
      />
      <div class="collapse show p-2" id="price" data-parent="#price-accordion">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Min</span>
          </div>
          <input
            type="text"
            class="form-control"
            :value="price.selected.min"
            v-on:input="price.selected.min = Number($event.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text">&euro;</span>
          </div>
        </div>

        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Max</span>
          </div>
          <input
            type="text"
            class="form-control"
            :value="price.selected.max"
            v-on:input="price.selected.max  = Number($event.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text">&euro;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderDouble from "@/components/common/inputs/SliderDouble.vue";
export default {
  components: {
    SliderDouble
  },
  data() {
    return {
      price: {
        min: 50,
        max: 2000,
        selected: {
          min: 50,
          max: 2000
        }
      }
    }
  },
  methods: {
    handlePrice(range) {
      this.price.selected.min = range.min;
      this.price.selected.max = range.max;
    }
  }
};
</script>

<style>
</style>