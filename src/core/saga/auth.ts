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
import { setLoadingAction } from '../actions/LoaderActions';
import { Action } from '../interfaces/Action';
import { errorMessage } from '../../shared/helpers/helpers';
import { Day } from '../interfaces/WorkoutInterfaces';

function* registerSaga(action: Action<UserActionsTypes>) {
  const { email, password } = action.payload;
  yield put(setLoadingAction(true));
  try {
    const responseEmail: string = yield call(registerUser, email, password);
    yield put(registerSuccess(responseEmail));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(registerError(error));
    yield put(setLoadingAction(false));
  }
}

function* signInSaga(action: Action<UserActionsTypes>) {
  const { email, password } = action.payload;
  yield put(setLoadingAction(true));
  try {
    const responseEmail: string = yield call(signInUser, email, password);
    yield put(signinSuccess(responseEmail));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(signinError(error));
    yield put(setLoadingAction(false));
  }
}

function* logOutSaga() {
  yield put(setLoadingAction(true));
  yield call(logOutUser);
  yield put(setLoadingAction(false));
  return put(logOut());
}

function* getWorkoutsSaga(action: Action<UserActionsTypes>) {
  const email = action.payload;
  yield put(setLoadingAction(true));
  try {
    const arr: Array<Day> = yield call(getWorkouts, email);
    if (arr) yield put(setWorkouts(arr));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(getWorkoutsError(error));
    yield put(setLoadingAction(false));
  }
}

function* addNewWorkoutDaySaga(action: Action<UserActionsTypes>) {
  const { email, arr, date, cb } = action.payload;
  yield put(setLoadingAction(true));
  try {
    yield call(addNewWorkoutDay, email, arr, date, cb);
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(addNewWorkoutDayError(error));
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
