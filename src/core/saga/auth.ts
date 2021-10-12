import { put, call, takeEvery } from 'redux-saga/effects';

import {
  UserActionsTypes,
  signinSuccess,
  registerSuccess,
  logOut,
  setWorkouts,
  signinError,
  registerError,
  getWorkoutsError,
  addNewWorkoutDayError,
} from '../actions/UserActions';
import {
  signInUser,
  registerUser,
  logOutUser,
  getWorkouts,
  addNewWorkoutDay,
} from '../services/userServices';
import { Action } from '../interfaces/Action';
import { errorMessage } from '../../shared/helpers/helpers';
import { Day } from '../interfaces/WorkoutInterfaces';

function* registerSaga(action: Action<UserActionsTypes>) {
  const { email, password } = action.payload;
  try {
    const responseEmail: string = yield call(registerUser, email, password);
    yield put(registerSuccess(responseEmail));
  } catch (e) {
    const error = errorMessage(e);
    yield put(registerError(error));
  }
}

function* signInSaga(action: Action<UserActionsTypes>) {
  const { email, password } = action.payload;
  try {
    const responseEmail: string = yield call(signInUser, email, password);
    yield put(signinSuccess(responseEmail));
  } catch (e) {
    const error = errorMessage(e);
    yield put(signinError(error));
  }
}

function* logOutSaga() {
  yield call(logOutUser);
  return put(logOut());
}

function* getWorkoutsSaga(action: Action<UserActionsTypes>) {
  const email = action.payload;
  try {
    const arr: Array<Day> = yield call(getWorkouts, email);
    if (arr) yield put(setWorkouts(arr));
  } catch (e) {
    const error = errorMessage(e);
    yield put(getWorkoutsError(error));
  }
}

function* addNewWorkoutDaySaga(action: Action<UserActionsTypes>) {
  const { email, arr, date, cb } = action.payload;
  try {
    yield call(addNewWorkoutDay, email, arr, date, cb);
  } catch (e) {
    const error = errorMessage(e);
    yield put(addNewWorkoutDayError(error));
  }
}

export function* authWatcher(): Generator {
  yield takeEvery(UserActionsTypes.SIGN_IN, signInSaga);
  yield takeEvery(UserActionsTypes.REGISTER, registerSaga);
  yield takeEvery(UserActionsTypes.LOG_OUT, logOutSaga);
  yield takeEvery(UserActionsTypes.GET_WORKOUTS, getWorkoutsSaga);
  yield takeEvery(UserActionsTypes.ADD_WORKOUT_DAY, addNewWorkoutDaySaga);
}
