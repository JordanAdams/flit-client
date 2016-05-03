import React from 'react';
import sortBy from 'lodash.sortBy';
import Word from './WordGraph/Word';

const WordGraph = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['positive', 'negative']),
    words: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  sortWords(words) {
    return words.sort((wordA, wordB) => {
      if (wordA.value === wordB.value) {
        return 0;
      }

      return wordA.value < wordB.value ? 1 : -1;
    });
  },

  createWordElements(words) {
    const upper = words.reduce((acc, word) => {
      return word.value > acc ? word.value : acc;
    }, 0);

    return this.sortWords(words)
      .slice(0, 10)
      .map((word, index) => {
        const percentage = (word.value / upper) * 100;

        return <Word key={index} word={word.word} percentage={percentage} value={word.value}/>;
      });
  },

  render() {
    const {words, type} = this.props;

    const children = this.createWordElements(words.filter((word) => {
      return !['no'].includes(word.word);
    }));

    return <ul className={type + ' word-graph'}>{children}</ul>;
  }
});

export default WordGraph;
