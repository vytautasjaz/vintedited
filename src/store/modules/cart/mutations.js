import {
  ADD_ITEMS,
  INC,
  DEC,
  REMOVE,
} from './mutation-types'

export default {
  [ADD_ITEMS](state, item) {
    const itemIndex = state.items.findIndex(el => el.id == item.id) // retrun index arba -1
    if (itemIndex >= 0)
      state.items[itemIndex].count += item.count;
    else
      state.items.unshift(item);
  },

  [INC]({ items }, id) {
    const itemIndex = items.findIndex(el => el.id == id)
    items[itemIndex].count++;
  },

  [DEC]({ items }, id) {
    const itemIndex = items.findIndex(el => el.id == id)
    if (items[itemIndex].count == 1)
      items.splice(itemIndex, 1);
    else
      items[itemIndex].count--;
  },
  
  [REMOVE](state, id) {
    state.items = state.items.filter(el => el.id != id);
  },
}