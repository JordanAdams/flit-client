import test from 'ava';
import updateNegativeWords from '../../src/js/actions/update-negative-words';

test('Creates an UPDATE_NEGATIVE_WORDS action', (t) => {
  const words = [
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ];
  const action = {
    type: 'UPDATE_NEGATIVE_WORDS',
    payload: [
      {word: 'hello', value: 1},
      {word: 'world', value: 2}
    ]
  };

  t.deepEqual(updateNegativeWords(words), action);
});
