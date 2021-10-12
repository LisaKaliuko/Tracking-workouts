import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { UserActionsTypes } from '../actions/UserActions';
import { Day } from '../interfaces/WorkoutInterfaces';

interface InitialStateAuth {
  user: {
    email: string | null;
    signinError: string | null;
    registerError: string | null;
    workoutsError: string | null;
    addWorkoutDayError: string | null;
    arrOfWorkouts: Array<Day>;
  };
}

const initialState: InitialStateAuth = {
  user: {
    email: null,
    signinError: null,
    registerError: null,
    workoutsError: null,
    addWorkoutDayError: null,
    arrOfWorkouts: [],
  },
};

const authReducer = handleActions<InitialStateAuth>(
  {
    [UserActionsTypes.SIGN_IN]: (state: InitialStateAuth) => ({
      ...state,
    }),

    [UserActionsTypes.SIGN_IN_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
    }),

    [UserActionsTypes.SIGN_IN_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
    }),

    [UserActionsTypes.REGISTER]: (state: InitialStateAuth) => ({
      ...state,
    }),

    [UserActionsTypes.REGISTER_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
    }),

    [UserActionsTypes.REGISTER_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
    }),

    [UserActionsTypes.LOG_OUT]: () => initialState,

    [UserActionsTypes.GET_WORKOUTS]: (state: InitialStateAuth) => ({
      ...state,
    }),

    [UserActionsTypes.GET_WORKOUTS_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
    }),

    [UserActionsTypes.SET_WORKOUTS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...state.user, arrOfWorkouts: action.payload.array },
    }),

    [UserActionsTypes.ADD_WORKOUT_DAY_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
    }),
  },

  initialState
);

export default authReducer;
