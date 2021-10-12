import { createAction } from 'redux-actions';

import { Category, Exercise } from '../interfaces/WorkoutInterfaces';

export enum WorkoutActionsTypes {
  GET_CATEGORIES = '[WORKOUT] GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS = '[WORKOUT] GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR = '[WORKOUT] GET_CATEGORIES_ERROR',

  GET_EXERCISES = '[WORKOUT] GET_EXERCISES',
  GET_EXERCISES_SUCCESS = '[WORKOUT] GET_EXERCISES_SUCCESS',
  GET_EXERCISES_ERROR = '[WORKOUT] GET_EXERCISES_ERROR',

  DAY = '[WORKOUT] DAY',
  CATEGORY = '[WORKOUT] CATEGORY',
  EXERCISE = '[WORKOUT] EXERCISE',
}

export const getCategories = createAction(WorkoutActionsTypes.GET_CATEGORIES);

export const getCategoriesSuccess = createAction(
  WorkoutActionsTypes.GET_CATEGORIES_SUCCESS,
  (categories: Array<Category>) => ({ categories })
);

export const getCategoriesError = createAction(
  WorkoutActionsTypes.GET_CATEGORIES_ERROR,
  (categoriesError: string) => ({ categoriesError })
);

export const getExercises = createAction(WorkoutActionsTypes.GET_EXERCISES);

export const getExercisesSuccess = createAction(
  WorkoutActionsTypes.GET_EXERCISES_SUCCESS,
  (exercises: Array<Exercise>) => ({ exercises })
);

export const getExercisesError = createAction(
  WorkoutActionsTypes.GET_EXERCISES_ERROR,
  (exercisesError: string) => ({ exercisesError })
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
