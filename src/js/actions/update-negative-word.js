export default (word, value) => {
  return {
    type: 'UPDATE_NEGATIVE_WORD',
    payload: {word, value}
  };
};
