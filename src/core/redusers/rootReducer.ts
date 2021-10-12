import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReduser';
import workoutReducer from './workoutReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  workout: workoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
