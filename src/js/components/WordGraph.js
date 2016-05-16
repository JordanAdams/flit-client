import React from 'react';
import sortBy from 'lodash.sortby';
import Word from './WordGraph/Word';

const WordGraph = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['positive', 'negative']),
    words: React.PropTypes.arrayOf(React.PropTypes.object)
  },
  
  createWordElements(words) {
    const upper = words.reduce((acc, word) => {
      return word.value > acc ? word.value : acc;
    }, 0);

    return sortBy(words, 'value')
      .reverse()
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
