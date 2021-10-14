import { put, call, takeEvery } from 'redux-saga/effects';

import {
  UserActionsTypes,
  signinSuccess,
  registerSuccess,
  getWorkoutsSuccess,
  signinError,
  registerError,
  getWorkoutsError,
  logOutSuccess,
  logOutError,
  addWorkoutDaySuccess,
  addWorkoutDayError,
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
import { logOutWorkout } from '../actions/WorkoutActions';

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
  try {
    yield call(logOutUser);
    yield put(logOutSuccess());
    yield put(logOutWorkout());
  } catch (e) {
    const error = errorMessage(e);
    yield put(logOutError(error));
  }
}

function* getWorkoutsSaga(action: Action<UserActionsTypes>) {
  const email = action.payload;
  try {
    const arr: Array<Day> = yield call(getWorkouts, email);
    if (arr) yield put(getWorkoutsSuccess(arr));
  } catch (e) {
    const error = errorMessage(e);
    yield put(getWorkoutsError(error));
  }
}

function* addWorkoutDaySaga(action: Action<UserActionsTypes>) {
  const { email, arr, date, cb } = action.payload;
  try {
    yield call(addNewWorkoutDay, email, arr, date, cb);
    yield put(addWorkoutDaySuccess());
  } catch (e) {
    const error = errorMessage(e);
    yield put(addWorkoutDayError(error));
  }
}

export function* authWatcher(): Generator {
  yield takeEvery(UserActionsTypes.SIGN_IN, signInSaga);
  yield takeEvery(UserActionsTypes.REGISTER, registerSaga);
  yield takeEvery(UserActionsTypes.LOG_OUT, logOutSaga);
  yield takeEvery(UserActionsTypes.GET_WORKOUTS, getWorkoutsSaga);
  yield takeEvery(UserActionsTypes.ADD_WORKOUT_DAY, addWorkoutDaySaga);
}
