import rootReducers from './reducers';
import { createStore } from 'redux';
import initialState from './state'

export const store = createStore(rootReducers, initialState);