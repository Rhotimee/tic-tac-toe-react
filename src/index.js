import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Board from './Board';
import registerServiceWorker from './registerServiceWorker';
import rootReducers from './reducers';

const store = createStore(rootReducers);

render(
  <Provider store={store}>
    <Board />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
