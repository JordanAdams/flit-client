import test from 'ava';
import updateNegativeWord from '../../src/js/actions/update-negative-word';

test('Creates an UPDATE_NEGATIVE_WORD action', (t) => {
  const action = {
    type: 'UPDATE_NEGATIVE_WORD',
    payload: {word: 'hello', value: 1}
  };

  t.deepEqual(updateNegativeWord('hello', 1), action);
});
