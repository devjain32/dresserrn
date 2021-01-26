export const filterLists = function (lists, category) {
  var newList = [];
  for (i = 0; i < lists.listings.length; i++) {
    if (
      lists.listings[i].category == category ||
      lists.listings[i].brand == category ||
      lists.listings[i].thriftStore == category
    ) {
      newList.push(lists.listings[i]);
    }
  }
  return newList;
};
