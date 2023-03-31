export const getNumbers = (page, limit) => {
  let arr = [];
  for (let i = (page - 1) * 10 + 1; i <= page * limit; i++) {
    arr.push(i);
  }

  return arr;
};
