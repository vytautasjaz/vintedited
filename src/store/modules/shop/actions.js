import {
  TOGGLE_IS_LOADING,
  CREATE_CATEGORY_FILTERS,
  TOGGLE_FILTER,
  SELECT_ITEMS,
  CHANGE_ITEMS_PER_PAGE_OPTION,
  CHANGE_SORT_OPTION,
  SORT_ITEMS,
  SELECT_PAGE_ITEMS,
  SET_ITEM_COUNT,
  CREATE_PAGINATION,
  SET_PAGE,
  FILTER_BY_CATEGORY,
  SET_CATEGORY
} from './mutation-types'

export default {
  async fetchItems({ commit, dispatch }, category) {
    commit(TOGGLE_IS_LOADING);
    setTimeout(() => { // Užaugęs būsiu API CALL
      commit(CREATE_CATEGORY_FILTERS);
      commit(SET_CATEGORY, category??"");
      dispatch('selectItems', category);
      commit(TOGGLE_IS_LOADING);
    }, 500)
  },

  filterItems({ commit, dispatch }, filterName) {
    commit(TOGGLE_FILTER, filterName);
    dispatch('selectItems');
  },

  changeItemsPerPageOption({ commit, dispatch }, itemsPerPage) {
    commit(CHANGE_ITEMS_PER_PAGE_OPTION, itemsPerPage);
    commit(SET_PAGE, 1);
    dispatch('selectItems');
  },

  changeSortOption({ commit, dispatch }, name) {
    commit(CHANGE_SORT_OPTION, name);
    dispatch('selectItems');
  },
  
  setPage({commit, dispatch}, page){
    commit(SET_PAGE, page);
    dispatch('selectItems');
  },

  selectItems({commit, state}){
    if(state.category){
      commit(FILTER_BY_CATEGORY)
    }
    commit(SELECT_ITEMS);
    commit(SET_ITEM_COUNT);
    commit(SORT_ITEMS);
    commit(SELECT_PAGE_ITEMS);
    commit(CREATE_PAGINATION);
  }
};