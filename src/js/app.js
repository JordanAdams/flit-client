import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import debounce from 'lodash.debounce';
import reducer from './reducer';
import updatePositive from './actions/update-positive';
import updateNegative from './actions/update-negative';
import updatePositiveWords from './actions/update-positive-words';
import updateNegativeWords from './actions/update-negative-words';
import socketIO from 'socket.io-client';
import Home from './pages/Home';

const store = createStore(reducer);

const socket = socketIO('http://localhost:3000');
socket.on('positive_changed', debounce((data) => {
  store.dispatch(updatePositive(data));
}), 50);

socket.on('negative_changed', debounce((data) => {
  store.dispatch(updateNegative(data));
}), 50);

socket.on('positive_words', (words) => {
  console.log(words);
  store.dispatch(updatePositiveWords(words));
});

socket.on('negative_words', (words) => {
  store.dispatch(updateNegativeWords(words));
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
