import { fork } from 'redux-saga/effects';

import { authWatcher } from './auth';
import { workoutWatcher } from './workout';

export function* rootSaga(): Generator {
  yield fork(authWatcher);
  yield fork(workoutWatcher);
}
