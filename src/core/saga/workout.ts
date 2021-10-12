import { put, call, takeEvery } from 'redux-saga/effects';

import {
  WorkoutActionsTypes,
  setCategories,
  setExercises,
  setServerError,
} from '../actions/WorkoutActions';
import { getCategories, getExercises } from '../services/workoutServices';
import { setLoadingAction } from '../actions/LoaderActions';
import { Action } from '../interfaces/Action';
import { Category, Exercise } from '../interfaces/WorkoutInterfaces';
import { errorMessage } from '../../shared/helpers/helpers';

function* getCategoriesSaga() {
  yield put(setLoadingAction(true));
  try {
    const data: Array<Category> = yield call(getCategories);
    if (data) yield put(setCategories(data));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setServerError(error));
    yield put(setLoadingAction(false));
  }
}

function* getExercisesSaga(action: Action<WorkoutActionsTypes>) {
  const { id } = action.payload;
  yield put(setLoadingAction(true));
  try {
    const data: Array<Exercise> = yield call(getExercises, id);
    if (data) yield put(setExercises(data));
    yield put(setLoadingAction(false));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setServerError(error));
    yield put(setLoadingAction(false));
  }
}

export function* workoutWatcher(): Generator {
  yield takeEvery(WorkoutActionsTypes.GET_CATEGORIES, getCategoriesSaga);
  yield takeEvery(WorkoutActionsTypes.GET_EXERCISES, getExercisesSaga);
}
