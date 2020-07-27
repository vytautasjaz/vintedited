export default {
  getHomeItems: ({ items }) => items,

  getSelectedItems: ({ selectedItems }) => selectedItems,

  getItemCount: ({ selectedItemCount }) => selectedItemCount,

  getSearchQuery: ({ searchQuery }) => searchQuery,

  getItemById: (state) => (id) => state.items.find(item => item.id === id),

  getIsLoading: ({ isLoading }) => isLoading,

  getFilters: ({ filters }) => filters,

  getItemsPerPageOptions: ({ itemsPerPageOptions }) => itemsPerPageOptions,

  getSortOptions: ({ sortOptions }) => sortOptions,

  getPagination: ({pagination}) => pagination
};