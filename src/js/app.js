import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import updatePositive from './actions/update-positive';
import updateNegative from './actions/update-negative';
import updatePositiveWord from './actions/update-positive-word';
import updateNegativeWord from './actions/update-negative-word';
import setPositiveWords from './actions/set-positive-words';
import setNegativeWords from './actions/set-negative-words';
import socketIO from 'socket.io-client';
import Home from './pages/Home';

const store = createStore(reducer);

const socket = socketIO('http://localhost:3000');
socket.on('positive', (data) => {
  store.dispatch(updatePositive(data));
});

socket.on('negative', (data) => {
  store.dispatch(updateNegative(data));
});

socket.on('words', (words) => {
  store.dispatch(setPositiveWords(words.positive));
  store.dispatch(setNegativeWords(words.negative));
});

socket.on('positive_word', ({word, value}) => {
  store.dispatch(updatePositiveWord(word, value));
});

socket.on('negative_word', ({word, value}) => {
  store.dispatch(updateNegativeWord(word, value));
});

const render = () => {
  const {positive, negative, words} = store.getState();

  ReactDOM.render(
    <Home positive={positive} negative={negative} words={words}/>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
