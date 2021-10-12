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

  GET_WORKOUTS = '[USER] GET_WORKOUTS_FROM_FIREBASE',
  GET_WORKOUTS_ERROR = '[USER] GET_WORKOUTS_FROM_FIREBASE_ERROR',
  SET_WORKOUTS = '[USER] SET_WORKOUTS_TO_STORE',

  ADD_WORKOUT_DAY = '[USER] ADD_WORKOUT_DAY',
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

export const getWorkouts = createAction(UserActionsTypes.GET_WORKOUTS);

export const getWorkoutsError = createAction(
  UserActionsTypes.GET_WORKOUTS_ERROR,
  (workoutsError: string) => ({ workoutsError })
);

export const setWorkouts = createAction(
  UserActionsTypes.SET_WORKOUTS,
  (array: Array<Day>) => ({ array })
);

export const addNewWorkoutDay = createAction(
  UserActionsTypes.ADD_WORKOUT_DAY,
  (email: string, arr: Array<Day>, date: Day, cb: () => void) => ({
    email,
    arr,
    date,
    cb,
  })
);

export const addNewWorkoutDayError = createAction(
  UserActionsTypes.ADD_WORKOUT_DAY_ERROR,
  (addWorkoutDayError: string) => ({ addWorkoutDayError })
);
