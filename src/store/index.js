import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart/'
import shop from './modules/shop/'
import favorites from './modules/favorites/'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    shop,
    favorites
  },
})
