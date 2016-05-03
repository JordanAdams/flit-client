import test from 'ava';
import updatePositive from '../../src/js/actions/update-positive';

test('Creates an UPDATE_POSITIVE action', (t) => {
  t.deepEqual(updatePositive(100), {
    type: 'UPDATE_POSITIVE',
    value: 100
  });
});
