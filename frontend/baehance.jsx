import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchImages } from './util/images_api_util';
// import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  // Modal.setAppElement(document.body);
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchImages = fetchImages;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
