import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { UserActionsTypes, Day } from '../actions/UserActions';

interface InitialStateAuth {
  user: {
    email: string | null;
    uid: string | null;
    error: string | null;
    arrOfWorkouts: Array<Day>;
  };
}

const initialState: InitialStateAuth = {
  user: {
    email: null,
    uid: null,
    error: null,
    arrOfWorkouts: [],
  },
};

const authReducer = handleActions<InitialStateAuth>(
  {
    [UserActionsTypes.SIGN_IN]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => ({
      ...state,
      user: {
        ...state.user,
        error: null,
        uid: action.payload.uid,
        email: action.payload.email,
        arrOfWorkouts: action.payload.arrOfWorkouts,
      },
    }),
    [UserActionsTypes.LOG_OUT]: (state: InitialStateAuth) => ({
      ...state,
      user: {
        email: null,
        uid: null,
        error: null,
        arrOfWorkouts: [],
      },
    }),
    [UserActionsTypes.ERROR]: (state: InitialStateAuth, action: AnyAction) => ({
      ...state,
      user: { ...state.user, error: action.payload },
    }),
    [UserActionsTypes.WORKOUT]: (
      state: InitialStateAuth,
      action: AnyAction
    ) => {
      const prevDates = state.user.arrOfWorkouts;
      const newDates = [...prevDates, action.payload];
      return { ...state, user: { ...state.user, arrOfWorkouts: newDates } };
    },
  },
  initialState
);

export default authReducer;
