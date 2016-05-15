import setPositiveWords from '../../src/js/actions/set-positive-words';
import test from 'ava';

test('Creates an SET_POSITIVE_WORDS action', (t) => {
  const words = [
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ];
  const action = {
    type: 'SET_POSITIVE_WORDS',
    payload: [
      {word: 'hello', value: 1},
      {word: 'world', value: 2}
    ]
  };

  t.deepEqual(setPositiveWords(words), action);
});
