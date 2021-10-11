import { put, call, takeEvery } from 'redux-saga/effects';

import {
  UserActionsTypes,
  signinSuccess,
  setError,
  registerSuccess,
  logOut,
  setWorkouts,
} from '../actions/UserActions';
import {
  signInUser,
  registerUser,
  logOutUser,
  getWorkouts,
  addNewWorkoutDay,
} from '../services/userServices';
import { setLoadingAction } from '../actions/LoaderActions';
import { Action } from '../interfaces/Action';
import { errorMessage } from '../../shared/helpers/helpers';
import { Day } from '../interfaces/WorkoutInterfaces';

function* registerSaga(action: Action<UserActionsTypes>) {
  yield put(setLoadingAction(true));
  try {
    const email: string = yield call(
      registerUser,
      action.payload.email,
      action.payload.password
    );
    yield put(registerSuccess(email));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setError(error));
    yield put(setLoadingAction(false));
  }
}

function* signInSaga(action: Action<UserActionsTypes>) {
  yield put(setLoadingAction(true));
  try {
    const email: string = yield call(
      signInUser,
      action.payload.email,
      action.payload.password
    );
    yield put(signinSuccess(email));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setError(error));
    yield put(setLoadingAction(false));
  }
}

function* logOutSaga() {
  yield put(setLoadingAction(true));
  try {
    yield call(logOutUser);
    yield put(setLoadingAction(false));
    return put(logOut());
  } catch (e) {
    const error = errorMessage(e);
    yield put(setError(error));
    yield put(setLoadingAction(false));
  }
}

function* getWorkoutsSaga(action: Action<UserActionsTypes>) {
  yield put(setLoadingAction(true));
  try {
    const arr: Array<Day> = yield call(getWorkouts, action.payload);
    if (arr) yield put(setWorkouts(arr));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setError(error));
    yield put(setLoadingAction(false));
  }
}

function* addNewWorkoutDaySaga(action: Action<UserActionsTypes>) {
  yield put(setLoadingAction(true));
  try {
    yield call(
      addNewWorkoutDay,
      action.payload.email,
      action.payload.arr,
      action.payload.date,
      action.payload.cb
    );
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setError(error));
    yield put(setLoadingAction(false));
  }
}

export function* authWatcher(): Generator {
  yield takeEvery(UserActionsTypes.SIGN_IN, signInSaga);
  yield takeEvery(UserActionsTypes.REGISTER, registerSaga);
  yield takeEvery(UserActionsTypes.LOG_OUT, logOutSaga);
  yield takeEvery(UserActionsTypes.GET_WORKOUTS, getWorkoutsSaga);
  yield takeEvery(UserActionsTypes.ADD_WORKOUT_DAY, addNewWorkoutDaySaga);
}
