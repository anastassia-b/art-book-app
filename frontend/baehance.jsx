import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchProjects, fetchProjectDetail } from './actions/project_actions';
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
  window.fetchProjects = fetchProjects;
  window.fetchProjectDetail = fetchProjectDetail;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
