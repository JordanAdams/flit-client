import test from 'ava';
import deepFreeze from 'deep-freeze';
import reducer from '../src/js/reducer';
import updatePositive from '../src/js/actions/update-positive';
import updateNegative from '../src/js/actions/update-negative';
import updatePositiveWord from '../src/js/actions/update-positive-word';
import updateNegativeWord from '../src/js/actions/update-negative-word';
import setPositiveWords from '../src/js/actions/set-positive-words';
import setNegativeWords from '../src/js/actions/set-negative-words';

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

test('Update Positive Word (Change)', (t) => {
  const before = {
    words: {
      positive: [
        {word: 'hello', value: 1}
      ]
    }
  };
  const after = {
    words: {
      positive: [
        {word: 'hello', value: 2}
      ]
    }
  };
  const action = updatePositiveWord('hello', 2);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Update Positive Word (Insert)', (t) => {
  const before = {
    words: {
      positive: []
    }
  };
  const after = {
    words: {
      positive: [
        {word: 'hello', value: 2}
      ]
    }
  };
  const action = updatePositiveWord('hello', 2);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Update Negative Word (Change)', (t) => {
  const before = {
    words: {
      negative: [
        {word: 'hello', value: 1}
      ]
    }
  };
  const after = {
    words: {
      negative: [
        {word: 'hello', value: 2}
      ]
    }
  };
  const action = updateNegativeWord('hello', 2);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Update Negative Word (Insert)', (t) => {
  const before = {
    words: {
      negative: []
    }
  };
  const after = {
    words: {
      negative: [
        {word: 'hello', value: 2}
      ]
    }
  };
  const action = updateNegativeWord('hello', 2);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Set Positive Words', (t) => {
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
  const action = setPositiveWords([
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ]);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});

test('Set Negative Words', (t) => {
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
  const action = setNegativeWords([
    {word: 'hello', value: 1},
    {word: 'world', value: 2}
  ]);

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});
