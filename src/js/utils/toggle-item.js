export default (arr, value) => {
  if (arr.includes(value)) {
    return arr.filter(item => item !== value);
  }

  return arr.concat(value);
};
