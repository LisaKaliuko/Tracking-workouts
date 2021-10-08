import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { UserActionsTypes } from '../actions/UserActions';
import { IDay } from '../interfaces/WorkoutInterfaces';

interface InitialStateAuth {
  user: {
    email: string | null;
    error: string | null;
    arrOfWorkouts: Array<IDay>;
  };
}

const initialState: InitialStateAuth = {
  user: {
    email: null,
    error: null,
    arrOfWorkouts: [],
  },
};

const authReducer = handleActions<InitialStateAuth>(
  {
    [UserActionsTypes.SIGN_IN_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),

    [UserActionsTypes.REGISTER_SUCCESS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),

    [UserActionsTypes.LOG_OUT]: () => initialState,

    [UserActionsTypes.ERROR]: (state: InitialStateAuth, action: AnyAction) => ({
      ...state,
      user: { ...state.user, error: action.payload },
    }),

    [UserActionsTypes.SET_WORKOUTS]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: { ...state.user, arrOfWorkouts: action.payload },
    }),
  },
  initialState
);

export default authReducer;
