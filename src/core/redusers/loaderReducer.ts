import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { LoaderActionTypes } from '../actions/LoaderActions';

interface InitialStateLoader {
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
};

const loaderReducer = handleActions<InitialStateLoader>(
  {
    [LoaderActionTypes.LOADER]: (
      state: InitialStateLoader,
      action: AnyAction
    ) => ({ ...state, ...action.payload }),
  },
  initialState
);

export default loaderReducer;
