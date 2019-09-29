export const convertToArrayListTV = array => {
  let arrayObjectTVShows = [];
  for (let i = 0; i < array.length; i++) {
    arrayObjectTVShows.push({
      id: array[i].id,
      name: array[i].name
    });
  }
  return arrayObjectTVShows;
};
