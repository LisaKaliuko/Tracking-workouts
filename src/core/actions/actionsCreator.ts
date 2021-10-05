import { createAction } from '@reduxjs/toolkit';

export enum UserActionsTypes {
  SIGN_IN = '[USER] SIGN_IN',
  LOG_OUT = '[USER] LOG_OUT',
  ERROR = '[USER] ERROR',
  WORKOUT = '[USER] WORKOUT',
}

enum WorkoutActionsTypes {
  DAY = '[WORKOUT] DAY',
  CATEGORY = '[WORKOUT] CATEGORY',
  EXERCISE = '[WORKOUT] EXERCISE',
}

enum LoaderActionTypes {
  LOADER = '[LOADER] LOADER',
}

export interface Day {
  year: number;
  month: number;
  day: number;
}

interface User {
  uid: string;
  email: string;
  arrOfWorkouts: Array<Day>;
}

export interface Category {
  id: string;
  title: string;
}

interface Exercise {
  categoryId: string;
  description: string;
  id: string;
  img: string;
  name: string;
  repeats: number;
  sets: number;
}

export const setUserAction = createAction(
  UserActionsTypes.SIGN_IN,
  (user: User) => ({ payload: user })
);
export const setLogOutAction = createAction(UserActionsTypes.LOG_OUT);
export const setErrorAction = createAction(
  UserActionsTypes.ERROR,
  (error: Error) => ({ payload: error.message })
);
export const setWorkoutToArrOfWorkoutsAction = createAction(
  UserActionsTypes.WORKOUT,
  (date: Day) => ({ payload: date })
);

export const setDayAction = createAction(
  WorkoutActionsTypes.DAY,
  (year: number, month: number, day: number) => ({ payload: year, month, day })
);
export const setCategoryAction = createAction(
  WorkoutActionsTypes.CATEGORY,
  (category: Category) => ({ payload: category })
);
export const setExerciseAction = createAction(
  WorkoutActionsTypes.EXERCISE,
  (exercise: Exercise) => ({ payload: exercise })
);

export const setLoadingAction = createAction(
  LoaderActionTypes.LOADER,
  (bool: boolean) => ({ payload: { isLoading: bool } })
);
