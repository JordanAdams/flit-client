import test from 'ava';
import setNegativeWords from '../../src/js/actions/set-negative-words';

test('Creates an SET_NEGATIVE_WORDS action', (t) => {
  const words = [
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ];
  const action = {
    type: 'SET_NEGATIVE_WORDS',
    payload: [
      {word: 'hello', value: 1},
      {word: 'world', value: 2}
    ]
  };

  t.deepEqual(setNegativeWords(words), action);
});
