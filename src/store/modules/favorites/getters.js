export default {
  getFavoriteItems: ({ items }) => items,
  getFavoriteItemCount: ({ items }) => items.length,
  getFavoriteItemById: (state) => (id) => state.items.find(item => item.id === id),

}