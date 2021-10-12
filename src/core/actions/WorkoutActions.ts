import { createAction } from 'redux-actions';

import { Category, Exercise } from '../interfaces/WorkoutInterfaces';

export enum WorkoutActionsTypes {
  GET_CATEGORIES = '[WORKOUT] GET_CATEGORIES',
  SET_CATEGORIES = '[WORKOUT] SET_CATEGORIES',

  GET_EXERCISES = '[WORKOUT] GET_EXERCISES',
  SET_EXERCISES = '[WORKOUT] SET_EXERCISES',

  DAY = '[WORKOUT] DAY',
  CATEGORY = '[WORKOUT] CATEGORY',
  EXERCISE = '[WORKOUT] EXERCISE',

  SERVER_ERROR = '[WORKOUT] SERVER_ERROR',
}

export const getCategories = createAction(WorkoutActionsTypes.GET_CATEGORIES);

export const setCategories = createAction(
  WorkoutActionsTypes.SET_CATEGORIES,
  (categories: Array<Category>) => ({ categories })
);

export const getExercises = createAction(WorkoutActionsTypes.GET_EXERCISES);

export const setExercises = createAction(
  WorkoutActionsTypes.SET_EXERCISES,
  (exercises: Array<Exercise>) => ({ exercises })
);

export const setDayAction = createAction(
  WorkoutActionsTypes.DAY,
  (year: number, month: number, day: number) => ({
    year,
    month,
    day,
  })
);

export const setCategoryAction = createAction(
  WorkoutActionsTypes.CATEGORY,
  (category: Category) => ({ category })
);

export const setExerciseAction = createAction(
  WorkoutActionsTypes.EXERCISE,
  (exercise: Exercise) => ({ exercise })
);

export const setServerError = createAction(
  WorkoutActionsTypes.SERVER_ERROR,
  (serverError: string) => ({ payload: serverError })
);
