import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReduser';
import workoutReducer from './workoutReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  workout: workoutReducer,
  loader: loaderReducer,
});

export default rootReducer;
