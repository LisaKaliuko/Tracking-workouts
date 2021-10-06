import { createAction } from '@reduxjs/toolkit';

export enum UserActionsTypes {
  SIGN_IN = '[USER] SIGN_IN',
  LOG_OUT = '[USER] LOG_OUT',
  ERROR = '[USER] ERROR',
  WORKOUT = '[USER] WORKOUT',
}

export interface Day {
  year: number;
  month: number;
  day: number;
}

export interface User {
  uid: string;
  email: string;
  arrOfWorkouts: Array<Day>;
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
