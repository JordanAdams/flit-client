import React from 'react';
import upperFirst from 'lodash.upperfirst';

const toTitleCase = (word) => upperFirst(word.toLowerCase());

const Word = React.createClass({
  propTypes: {
    word: React.PropTypes.string,
    value: React.PropTypes.number,
    percentage: React.PropTypes.number
  },

  getInitialState() {
    return {value: null};
  },

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  },

  componentWillUpdate(nextProps) {
    if (this.state.value === null) {
      return;
    }
    
    if (this.state.value !== nextProps.value) {
      this.emphasise();
    }
  },

  emphasise() {
    this.listItem.className = 'shifted';

    setTimeout(() => {
      this.listItem.className = '';
    }, 300);
  },

  render() {
    const {word, percentage} = this.props;
    const style = {
      width: percentage + '%'
    };

    return <li ref={c => this.listItem = c} style={style}>{toTitleCase(word)}</li>;
  }
});

Word.displayName = 'Word';

export default Word;
