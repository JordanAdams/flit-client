import test from 'ava';
import deepFreeze from 'deep-freeze';
import reducer from '../src/js/reducer';
import updatePositive from '../src/js/actions/update-positive';
import updateNegative from '../src/js/actions/update-negative';
import updatePositiveWords from '../src/js/actions/update-positive-words';
import updateNegativeWords from '../src/js/actions/update-negative-words';

test('Update Positive', (t) => {
  const before = {};
  const after = {positive: 100};
  const action = updatePositive(100);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Update Negative', (t) => {
  const before = {};
  const after = {negative: 100};
  const action = updateNegative(100);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Update Positive Words', (t) => {
  const before = {
    words: {
      positive: []
    }
  };
  const after = {
    words: {
      positive: [
        {word: 'hello', value: 1},
        {word: 'world', value: 2}
      ]
    }
  };
  const action = updatePositiveWords([
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ]);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Update Negative Words', (t) => {
  const before = {
    words: {
      negative: []
    }
  };
  const after = {
    words: {
      negative: [
        {word: 'hello', value: 1},
        {word: 'world', value: 2}
      ]
    }
  };
  const action = updateNegativeWords([
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ]);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});
