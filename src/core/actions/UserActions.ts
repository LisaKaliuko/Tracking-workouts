import { createAction } from '@reduxjs/toolkit';

import { Day } from '../interfaces/WorkoutInterfaces';

export enum UserActionsTypes {
  SIGN_IN = '[USER] SIGN_IN',
  SIGN_IN_SUCCESS = '[USER] SIGN_IN_SUCCESS',
  REGISTER = '[USER] REGISTER',
  REGISTER_SUCCESS = '[USER] REGISTER_SUCCESS',
  LOG_OUT = '[USER] LOG_OUT',
  ERROR = '[USER] ERROR',
  GET_WORKOUTS = '[USER] GET_WORKOUTS_FROM_FIREBASE',
  SET_WORKOUTS = '[USER] SET_WORKOUTSTO_STORE',
  ADD_WORKOUT_DAY = '[USER] ADD_WORKOUT_DAY',
}

export const signin = createAction(
  UserActionsTypes.SIGN_IN,
  (email: string, password: string) => ({ payload: { email, password } })
);

export const signinSuccess = createAction(
  UserActionsTypes.SIGN_IN_SUCCESS,
  (email: string) => ({ payload: { email } })
);

export const setError = createAction(
  UserActionsTypes.ERROR,
  (error: string) => ({ payload: error })
);

export const register = createAction(
  UserActionsTypes.REGISTER,
  (email: string, password: string) => ({ payload: { email, password } })
);

export const registerSuccess = createAction(
  UserActionsTypes.REGISTER_SUCCESS,
  (email: string) => ({ payload: { email } })
);

export const logOut = createAction(UserActionsTypes.LOG_OUT);

export const getWorkouts = createAction(
  UserActionsTypes.GET_WORKOUTS,
  (email: string) => ({ payload: email })
);

export const setWorkouts = createAction(
  UserActionsTypes.SET_WORKOUTS,
  (array: Array<Day>) => ({ payload: array })
);

export const addNewWorkoutDay = createAction(
  UserActionsTypes.ADD_WORKOUT_DAY,
  (email: string, arr: Array<Day>, date: Day, cb: () => void) => ({
    payload: { email, arr, date, cb },
  })
);
