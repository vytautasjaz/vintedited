import {
  TOGGLE_FAVORITE,
} from './mutation-types'

export default {
  [TOGGLE_FAVORITE](state, item) {
    const itemIndex = state.items.findIndex(el => el.id == item.id) // retrun index arba -1
    if (itemIndex >= 0)
      state.items.splice(itemIndex, 1);
    else
      state.items.unshift(item);
  },
}



