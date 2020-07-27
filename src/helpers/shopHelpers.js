export const createCategoryList = (items) => {
    return items
        .map((el) => el.categories)
        .reduce((acc, el) => (acc = [...acc, ...el]), [])
        .filter((el, i, arr) => i == arr.indexOf(el))
}