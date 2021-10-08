import { createAction } from '@reduxjs/toolkit';

import { ICategory, IExercise } from '../interfaces/WorkoutInterfaces';

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
  (array: Array<ICategory>) => ({ payload: array })
);

export const getExercises = createAction(
  WorkoutActionsTypes.GET_EXERCISES,
  (categoryId: string) => ({ payload: categoryId })
);

export const setExercises = createAction(
  WorkoutActionsTypes.SET_EXERCISES,
  (array: Array<IExercise>) => ({ payload: array })
);

export const setDayAction = createAction(
  WorkoutActionsTypes.DAY,
  (year: number, month: number, day: number) => ({
    payload: { year, month, day },
  })
);

export const setCategoryAction = createAction(
  WorkoutActionsTypes.CATEGORY,
  (category: ICategory) => ({ payload: category })
);

export const setExerciseAction = createAction(
  WorkoutActionsTypes.EXERCISE,
  (exercise: IExercise) => ({ payload: exercise })
);

export const setServerError = createAction(
  WorkoutActionsTypes.SERVER_ERROR,
  (serverError: string) => ({ payload: serverError })
);
