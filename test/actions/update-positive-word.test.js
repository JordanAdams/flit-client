import updatePositiveWord from '../../src/js/actions/update-positive-word';
import test from 'ava';

test('Creates an UPDATE_POSITIVE_WORD action', (t) => {
  const action = {
    type: 'UPDATE_POSITIVE_WORD',
    payload: {word: 'hello', value: 1}
  };

  t.deepEqual(updatePositiveWord('hello', 1), action);
});
