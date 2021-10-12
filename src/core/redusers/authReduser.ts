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
  isLoading: boolean;
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
      isLoading: false,
    }),

    [UserActionsTypes.SIGN_IN_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
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
      isLoading: false,
    }),

    [UserActionsTypes.REGISTER_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
      isLoading: false,
    }),

    [UserActionsTypes.LOG_OUT]: () => initialState,

    [UserActionsTypes.GET_WORKOUTS]: (state: InitialStateAuth) => ({
      ...state,
      isLoading: true,
    }),

    [UserActionsTypes.GET_WORKOUTS_ERROR]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...action.payload },
      isLoading: false,
    }),

    [UserActionsTypes.SET_WORKOUTS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...state.user, arrOfWorkouts: action.payload.array },
      isLoading: false,
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
