import updateNegative from '../../src/js/actions/update-negative';
import test from 'ava';

test('Creates an UPDATE_NEGATIVE action', (t) => {
  t.deepEqual(updateNegative(100), {
    type: 'UPDATE_NEGATIVE',
    value: 100
  });
});
