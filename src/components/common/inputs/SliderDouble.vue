<template>
  <div class="mx-2 slider">
    <div class="slider__line" ref="slider">
      <div class="slider__line__min">{{min}}</div>
      <div class="slider__line__max">{{max}}</div>
    </div>
    <div
      class="slider__thumb slider__thumb--min"
      ref="thumbMin"
      v-bind:style="minStyle"
      v-on:mousedown="minDown"
      v-on:mousemove="dragMin"
      v-on:mouseup="thumbUp"
    >
      <div v-if="minThumb.isDragged" class="slider__thumb__value">{{selected.min}}</div>
    </div>
    <div
      class="slider__thumb slider__thumb--max"
      ref="thumbMax"
      v-bind:style="maxStyle"
      v-on:mousedown="maxDown"
      v-on:mousemove="dragMax"
      v-on:mouseup="thumbUp"
    >
      <div v-if="maxThumb.isDragged" class="slider__thumb__value">{{selected.max}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["min", "max", "selected"],
  watch: {
    "selected.min": function() {
      this.setThumbValues();
    },
    "selected.max": function() {
      this.setThumbValues();
    }
  },
  mounted() {
    this.slider = this.$refs.slider;
    this.thumb = this.$refs.thumbMin;
    this.thumbWidth = this.thumb.getBoundingClientRect().width;
    this.range = this.max - this.min;
    this.setSliderValues();
    this.setThumbValues();
    window.addEventListener("resize", () => {
      this.setSliderValues();
      this.setThumbValues();
    });
  },
  data() {
    return {
      minThumb: {
        isDragged: false,
        x: 0
      },
      maxThumb: {
        isDragged: false,
        x: 0
      }
    };
  },
  computed: {
    minStyle() {
      return `left: ${this.minThumb.x}px;`;
    },
    maxStyle() {
      return `left: ${this.maxThumb.x}px;`;
    }
  },
  methods: {
    // Display methods
    setSliderValues() {
      const { width, left } = this.slider.getBoundingClientRect();
      this.width = width - 2 * this.thumbWidth;
      this.thumbValue = (this.thumbWidth * this.range) / width;
      this.offsetMin = left;
      // this.offsetMax = left + this.thumbWidth;
    },
    setThumbValues() {
      if (
        this.selected.min >= this.min &&
        this.selected.min <= this.selected.max
      ) {
        this.minThumb.x = this.minValToX();
      }
      if (
        this.selected.max >= this.selected.min &&
        this.selected.max <= this.max
      ) {
        this.maxThumb.x = this.maxValToX();
      }
    },
    // Helper methods
    minValToX() {
      return (
        (this.width * (this.selected.min - this.max + this.range)) / this.range
      );
    },

    maxValToX() {
      return (
        (this.width * (this.selected.max - this.max + this.range)) /
          this.range +
        this.thumbWidth
      );
    },
    // Event Listeners
    minDown() {
      // this.minThumb.isDragged = true;
      // this.minThumb.correction =
      //   e.clientX - e.target.getBoundingClientRect().left;
    },
    thumbUp() {
      // this.maxThumb.isDragged = false;
      // this.minThumb.isDragged = false;
      // this.$emit("values-changed", {
      //   min:
      //     this.minThumb.value - 5 <= this.min ? this.min : this.minThumb.value,
      //   max:
      //     this.maxThumb.value + 5 >= this.max ? this.max : this.maxThumb.value
      // });
    },
    maxDown() {
      // this.maxThumb.isDragged = true;
      // this.maxThumb.correction =
      //   e.clientX - e.target.getBoundingClientRect().left;
    },
    dragMin() {},
    dragMax() {}
  }
};
</script>

<style lang="scss" scoped>
.slider {
  margin: 2rem 0 1.5rem;
  height: 24px;
  position: relative;
  z-index: 1;
  &__line {
    position: absolute;
    top: 10px;
    height: 8px;
    border-radius: 4px;
    width: 100%;
    background: $white;
    border: 1px solid $gray-500;
    display: flex;
    justify-content: space-between;
    &__min {
      position: relative;
      top: 12px;
      user-select: none;
    }

    &__max {
      position: relative;
      top: 12px;
      user-select: none;
    }
  }
  &__thumb {
    border-radius: 6px;
    position: absolute;
    height: 24px;
    width: 24px;
    background: $primary;
    z-index: 3;
    text-align: center;
    cursor: pointer;
    &:active {
      background: darken($primary, 5%);
    }
    &__value {
      position: relative;
      bottom: 24px;
      user-select: none;
    }
  }
  &__thumb--min {
    background: $secondary;
  }
}
</style>