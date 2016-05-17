import test from 'ava';
import toggleItem from '../../src/js/utils/toggle-item';

test('Adds items', (t) => {
  t.deepEqual(
    toggleItem([1, 2, 3], 4),
    [1, 2, 3, 4]
  );

  t.deepEqual(
    toggleItem([], 1),
    [1]
  );

  t.deepEqual(
    toggleItem(['a'], 'b'),
    ['a', 'b']
  );
});

test('Removes items', (t) => {
  t.deepEqual(
    toggleItem([1, 2, 3], 3),
    [1, 2]
  );

  t.deepEqual(
    toggleItem([1], 1),
    []
  );

  t.deepEqual(
    toggleItem(['a', 'b'], 'b'),
    ['a']
  );
});
