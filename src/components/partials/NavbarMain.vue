<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top d-flex flex-column">
    <div class="container">
      <router-link class="navbar-brand" href to="/">
        <img class="logo" src="~@/assets/logo.png" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="input-group w-100 mb-0 pl-0 mx-3">
          <input
            type="text"
            class="form-control"
            placeholder="Ieškokite savo prekės"
            v-model="searchQuery"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button"  @click="$router.push({ path: '/shop?category=' + searchQuery })">
            <!-- <button
              class="btn btn-outline-primary"
              type="button"
            @click="setSearchQuery(searchInput)"
            > -->
              <v-icon name="search" scale="1.5" />
            </button>
          </div>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-3">
            <a class="nav-link p-0">
              <router-link class="nav-link__link shopping-item-link" to="/favorites">
                <v-icon name="star" scale="2" />
                <div class="shopping-item-link__count">{{ favoriteItemCount }}</div>
              </router-link>
            </a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link p-0">
              <router-link class="nav-link__link shopping-item-link" to="/cart">
                <v-icon name="shopping-cart" scale="2" />
                <div class="shopping-item-link__count">{{ count }}</div>
              </router-link>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >User</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Login</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Settings</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="desktop d-flex align-items-center">
      <div class="container">
        <ul class="d-flex">
          <!-- <li class="nav-link__link text-nowrap">
            <router-link class="nav-link__link text-nowrap" to="/shop">Visos prekės</router-link>
          </li>-->
          <li class="nav-link__link text-nowrap">
            <router-link class="nav-link__link text-nowrap" to="/shop?category=female">Moteriški</router-link>
          </li>
          <li class="nav-link__link text-nowrap">
            <router-link class="nav-link__link text-nowrap" to="/shop?category=male">Vyriški</router-link>
          </li>
          <li class="nav-link__link text-nowrap">
            <router-link class="nav-link__link text-nowrap" to="/about">Apie mus</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    count: "cart/getItemCount",
    favoriteItemCount: "favorites/getFavoriteItemCount",
    filters: "shop/getFilters",
  }),
  // methods: {
  //   ...mapActions({
  //     // toggleFilter: "shop/filterItems"
  //     setSearchQuery: "shop/setSearchQuery",
  //   }),
  // },
};
</script>

<style lang="scss" scoped>
.shopping-item-link {
  position: relative;
  display: inline-block;
  padding: 0;
  height: 2rem;
  width: 2rem;
  line-height: 2rem;
  &__count {
    position: absolute;
    top: 0;
    right: -0.5rem;
    color: $white;
    font-size: 0.75rem;
    border: 1px solid $white;
    background: $primary;
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1.1rem;
    text-align: center;
    border-radius: 50%;
  }
}
.nav-link__link {
  color: $gray-500;
  &:hover {
    text-decoration: none;
    color: $primary;
  }
  &.router-link-exact-active {
    color: $primary;
  }
}
.logo {
  height: 50px;
}
.navbar {
  border-bottom: 1px solid $gray-300;
  margin: 0;
  padding: 0;
}
.desktop {
  width: 100%;
  height: 2.5rem;
  border-top: 1px solid $gray-300;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    margin-right: 20px;
  }
}
</style>
