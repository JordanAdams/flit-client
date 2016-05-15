export default (word, value) => {
  return {
    type: 'UPDATE_POSITIVE_WORD',
    payload: {word, value}
  };
};
