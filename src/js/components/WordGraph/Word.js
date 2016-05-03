import React from 'react';

const toTitleCase = (word) => {
  if (word.length === 0) {
    return word;
  }

  return [
    word.split('').shift().toUpperCase(),
    ...word.split('').slice(1)
  ].join('');
};

const Word = ({
  word,
  value,
  percentage
}) => {
  const style = {
    width: percentage + '%'
  };

  return <li style={style}>{toTitleCase(word)} ({value})</li>;
};

Word.displayName = 'Word';

export default Word;
