import {TOGGLE_FAVORITE} from './mutation-types'

export default {
  toggleFavorite({ commit }, item) {
    commit(TOGGLE_FAVORITE, item);
  }
}