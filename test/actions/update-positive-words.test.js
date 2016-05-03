import updatePositiveWords from '../../src/js/actions/update-positive-words';
import test from 'ava';

test('Creates an UPDATE_POSITIVE_WORDS action', (t) => {
  const words = [
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ];
  const action = {
    type: 'UPDATE_POSITIVE_WORDS',
    payload: [
      {word: 'hello', value: 1},
      {word: 'world', value: 2}
    ]
  };

  t.deepEqual(updatePositiveWords(words), action);
});
