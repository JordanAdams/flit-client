const initialState = {
  positive: 1,
  negative: 1,
  words: {
    positive: [],
    negative: []
  }
};

const applyWord = (words, word) => {
  let updated = false;
  const newWords = words.map((w) => {
    if (w.word !== word.word) {
      return w;
    }

    updated = true;
    return {...w, value: word.value};
  });

  if (updated) {
    return newWords;
  }

  return [...words, word];
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POSITIVE':
      return Object.assign({}, state, {positive: action.value});

    case 'UPDATE_NEGATIVE':
      return Object.assign({}, state, {negative: action.value});

    case 'UPDATE_POSITIVE_WORD':
      return {
        ...state,
        words: {
          ...state.words,
          positive: applyWord(state.words.positive, action.payload)
        }
      };

    case 'UPDATE_NEGATIVE_WORD':
      return {
        ...state,
        words: {
          ...state.words,
          negative: applyWord(state.words.negative, action.payload)
        }
      };

    case 'SET_POSITIVE_WORDS':
      return {
        ...state,
        words: {
          ...state.words,
          positive: action.payload
        }
      };

    case 'SET_NEGATIVE_WORDS':
      return {
        ...state,
        words: {
          ...state.words,
          negative: action.payload
        }
      };

    default:
      return state;
  }
};
