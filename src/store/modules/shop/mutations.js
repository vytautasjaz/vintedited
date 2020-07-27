import {
  SORT_ITEMS,
  TOGGLE_IS_LOADING,
  CREATE_CATEGORY_FILTERS,
  TOGGLE_FILTER,
  SELECT_ITEMS,
  CHANGE_ITEMS_PER_PAGE_OPTION,
  CHANGE_SORT_OPTION,
  SELECT_PAGE_ITEMS,
  SET_ITEM_COUNT,
  CREATE_PAGINATION,
  SET_PAGE,
  FILTER_BY_CATEGORY,
  SET_CATEGORY,
} from './mutation-types';
import { createCategoryList } from '@/helpers/shopHelpers';

export default {
  [CREATE_CATEGORY_FILTERS](state) {
    state.filters = state.items
      .reduce((acc, el) => (acc = [...acc, ...el.categories]), [])
      .filter((el, i, arr) => i == arr.indexOf(el))
      .map((category) => ({
        name: category,
        display: true,
        filterFunction: (el) => !el.categories.includes(category),
      }));
  },

  [SELECT_ITEMS](state) {
    let selectedItems = [...state.selectedItems];
    state.filters.forEach(({ display, filterFunction }) => {
      if (!display) {
        selectedItems = selectedItems.filter(filterFunction);
      }
    });
    state.selectedItems = selectedItems;
  },

  [SET_ITEM_COUNT](state) {
    state.selectedItemCount = state.selectedItems.length;
  },

  [TOGGLE_IS_LOADING](state) {
    state.isLoading = !state.isLoading;
  },

  [TOGGLE_FILTER]({ filters }, name) {
    const index = filters.findIndex((el) => el.name == name);
    filters[index].display = !filters[index].display;
  },

  [CHANGE_ITEMS_PER_PAGE_OPTION]({ itemsPerPageOptions }, itemsPerPage) {
    const index = itemsPerPageOptions.findIndex(
      (el) => el.count == itemsPerPage
    );
    for (let i = 0; i < itemsPerPageOptions.length; i++)
      itemsPerPageOptions[i].selected = i == index;
  },

  [CHANGE_SORT_OPTION]({ sortOptions }, name) {
    const index = sortOptions.findIndex((el) => el.name == name);
    for (let i = 0; i < sortOptions.length; i++)
      sortOptions[i].selected = i == index;
  },

  [SORT_ITEMS]({ selectedItems, sortOptions }) {
    selectedItems.sort(sortOptions.find((el) => el.selected).sortFunction);
  },

  [SELECT_PAGE_ITEMS](state) {
    const { selectedItems, pagination, itemsPerPageOptions } = state;
    const itemsPerPage = itemsPerPageOptions.find((el) => el.selected).count;
    state.selectedItems = selectedItems.splice(
      itemsPerPage * (pagination.currentPage - 1),
      itemsPerPage
    );
  },

  [CREATE_PAGINATION]({ pagination, selectedItemCount, itemsPerPageOptions }) {
    const itemsPerPage = itemsPerPageOptions.find((el) => el.selected).count;
    const pageCount = Math.ceil(selectedItemCount / itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push({
        number: i,
      });
    }
    pagination.pages = pages;
  },

  [SET_PAGE]({ pagination }, page) {
    pagination.currentPage = page;
  },

  [FILTER_BY_CATEGORY](state) {
    state.selectedItems = state.items.filter((el) =>
      el.categories.includes(state.category)
    );
    const wantedCategories = createCategoryList(state.selectedItems);
    const index = wantedCategories.indexOf(state.category);
    wantedCategories.splice(index, 1);

    state.filters = state.filters.filter(
      (el) => wantedCategories.includes(el.name)
    );
  },

  [SET_CATEGORY](state, category) {
    state.category = category;
  },
};
