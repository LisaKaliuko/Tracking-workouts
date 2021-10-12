import { put, call, takeEvery } from 'redux-saga/effects';

import {
  WorkoutActionsTypes,
  setCategories,
  setExercises,
  setServerError,
} from '../actions/WorkoutActions';
import { getCategories, getExercises } from '../services/workoutServices';
import { Action } from '../interfaces/Action';
import { Category, Exercise } from '../interfaces/WorkoutInterfaces';
import { errorMessage } from '../../shared/helpers/helpers';

function* getCategoriesSaga() {
  try {
    const data: Array<Category> = yield call(getCategories);
    if (data) yield put(setCategories(data));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setServerError(error));
  }
}

function* getExercisesSaga(action: Action<WorkoutActionsTypes>) {
  const { id } = action.payload;
  try {
    const data: Array<Exercise> = yield call(getExercises, id);
    if (data) yield put(setExercises(data));
  } catch (e) {
    const error = errorMessage(e);
    yield put(setServerError(error));
  }
}

export function* workoutWatcher(): Generator {
  yield takeEvery(WorkoutActionsTypes.GET_CATEGORIES, getCategoriesSaga);
  yield takeEvery(WorkoutActionsTypes.GET_EXERCISES, getExercisesSaga);
}
