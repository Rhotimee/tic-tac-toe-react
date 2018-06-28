import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Board from './Board';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store'

render(
  <Provider store={store}>
    <Board />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
