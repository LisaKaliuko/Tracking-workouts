import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { UserActionsTypes } from '../actions/UserActions';
import { Day } from '../interfaces/WorkoutInterfaces';

interface InitialStateAuth {
  user: {
    email: string | null;
    arrOfWorkouts: Array<Day>;
  };
  errors: {
    signinError: string | null;
    registerError: string | null;
    workoutsError: string | null;
    addWorkoutDayError: string | null;
  };
  isLoading: boolean;
}

const initialState: InitialStateAuth = {
  user: {
    email: null,
    arrOfWorkouts: [],
  },
  errors: {
    signinError: null,
    registerError: null,
    workoutsError: null,
    addWorkoutDayError: null,
  },
  isLoading: false,
};

const authReducer = handleActions<InitialStateAuth>(
  {
    [UserActionsTypes.SIGN_IN]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: true,
    }),

    [UserActionsTypes.SIGN_IN_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
      errors: { ...initialState.errors },
      isLoading: false,
    }),

    [UserActionsTypes.SIGN_IN_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      errors: { ...action.payload },
      isLoading: false,
    }),

    [UserActionsTypes.REGISTER]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: true,
    }),

    [UserActionsTypes.REGISTER_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
      errors: { ...initialState.errors },
      isLoading: false,
    }),

    [UserActionsTypes.REGISTER_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      errors: { ...action.payload },
      isLoading: false,
    }),

    [UserActionsTypes.LOG_OUT]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: true,
    }),

    [UserActionsTypes.LOG_OUT_SUCCESS]: () => initialState,

    [UserActionsTypes.LOG_OUT_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      errors: { ...action.payload },
      isLoading: false,
    }),

    [UserActionsTypes.GET_WORKOUTS]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: true,
    }),

    [UserActionsTypes.GET_WORKOUTS_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...state.user, arrOfWorkouts: action.payload.array },
      isLoading: false,
    }),

    [UserActionsTypes.GET_WORKOUTS_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      errors: { ...action.payload },
      isLoading: false,
    }),

    [UserActionsTypes.ADD_WORKOUT_DAY]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: true,
    }),

    [UserActionsTypes.ADD_WORKOUT_DAY_SUCCESS]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: false,
    }),

    [UserActionsTypes.ADD_WORKOUT_DAY_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      errors: { ...action.payload },
      isLoading: false,
    }),
  },

  initialState
);

export default authReducer;
