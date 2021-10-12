import { createAction } from 'redux-actions';

import { Day } from '../interfaces/WorkoutInterfaces';

export enum UserActionsTypes {
  SIGN_IN = '[USER] SIGN_IN',
  SIGN_IN_SUCCESS = '[USER] SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = '[USER] SIGN_IN_ERROR',

  REGISTER = '[USER] REGISTER',
  REGISTER_SUCCESS = '[USER] REGISTER_SUCCESS',
  REGISTER_ERROR = '[USER] REGISTER_ERROR',

  LOG_OUT = '[USER] LOG_OUT',
  LOG_OUT_SUCCESS = '[USER] LOG_OUT_SUCCESS',
  LOG_OUT_ERROR = '[USER] LOG_OUT_ERROR',

  GET_WORKOUTS = '[USER] GET_WORKOUTS_FROM_FIREBASE',
  GET_WORKOUTS_SUCCESS = '[USER] GET_WORKOUTS_SUCCESS',
  GET_WORKOUTS_ERROR = '[USER] GET_WORKOUTS_FROM_FIREBASE_ERROR',

  ADD_WORKOUT_DAY = '[USER] ADD_WORKOUT_DAY',
  ADD_WORKOUT_DAY_SUCCESS = '[USER] ADD_WORKOUT_DAY_SUCCESS',
  ADD_WORKOUT_DAY_ERROR = '[USER] ADD_WORKOUT_DAY_ERROR',
}

export const signin = createAction(UserActionsTypes.SIGN_IN);

export const signinSuccess = createAction(
  UserActionsTypes.SIGN_IN_SUCCESS,
  (email: string) => ({ email })
);

export const signinError = createAction(
  UserActionsTypes.SIGN_IN_ERROR,
  (signinError: string) => ({ signinError })
);

export const register = createAction(UserActionsTypes.REGISTER);

export const registerSuccess = createAction(
  UserActionsTypes.REGISTER_SUCCESS,
  (email: string) => ({ email })
);

export const registerError = createAction(
  UserActionsTypes.REGISTER_ERROR,
  (registerError: string) => ({ registerError })
);

export const logOut = createAction(UserActionsTypes.LOG_OUT);

export const logOutSuccess = createAction(UserActionsTypes.LOG_OUT_SUCCESS);

export const logOutError = createAction(
  UserActionsTypes.LOG_OUT_ERROR,
  (logOutError: string) => ({ logOutError })
);

export const getWorkouts = createAction(UserActionsTypes.GET_WORKOUTS);

export const getWorkoutsSuccess = createAction(
  UserActionsTypes.GET_WORKOUTS_SUCCESS,
  (array: Array<Day>) => ({ array })
);

export const getWorkoutsError = createAction(
  UserActionsTypes.GET_WORKOUTS_ERROR,
  (workoutsError: string) => ({ workoutsError })
);

export const addWorkoutDay = createAction(UserActionsTypes.ADD_WORKOUT_DAY);

export const addWorkoutDaySuccess = createAction(
  UserActionsTypes.ADD_WORKOUT_DAY_SUCCESS
);

export const addWorkoutDayError = createAction(
  UserActionsTypes.ADD_WORKOUT_DAY_ERROR,
  (addWorkoutDayError: string) => ({ addWorkoutDayError })
);
