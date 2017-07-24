import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchUser } from './actions/user_actions';
// import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  // Modal.setAppElement(document.body);
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUser = fetchUser;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
