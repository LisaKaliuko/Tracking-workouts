import { all } from 'redux-saga/effects';

import { authWatcher } from './auth';
import { workoutWatcher } from './workout';

export function* rootSaga(): Generator {
  yield all([authWatcher(), workoutWatcher()]);
}
