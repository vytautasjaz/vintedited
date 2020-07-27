<template >
  <div>
    <h4 class="text-center">Panašios prekės</h4>
    <div class="similar-item">
      <div class="similar-item">
        <router-link class="nav-link" to="/item/1">
          <img src="@/assets/img/home/rubas-1.jpg" alt />
        </router-link>
        <router-link class="nav-link" to="/item/1">
          <img src="@/assets/img/home/rubas-1.jpg" alt />
        </router-link>
        <router-link class="nav-link" to="/item/1">
          <img src="@/assets/img/home/rubas-1.jpg" alt />
        </router-link>
        <router-link class="nav-link" to="/item/1">
          <img src="@/assets/img/home/rubas-1.jpg" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.similar-items {
  display: flex;
  flex-direction: column;
}
.similar-item {
  width: 100%;
  margin-bottom: 1rem;
  img {
    width: 100%;
    box-shadow: 0 1px 4px 1px #6666;
  }
}
</style>