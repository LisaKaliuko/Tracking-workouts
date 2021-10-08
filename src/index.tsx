import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import createSagaMiddleware from '@redux-saga/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import 'firebase/auth';
import 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import rootReducer from './core/redusers/rootReducer';
import { firebaseConfig } from './config/fbConfig';
import { rootSaga } from './core/saga/root';
import { saveState, loadState } from './shared/helpers/helpers';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const initialState = loadState();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
