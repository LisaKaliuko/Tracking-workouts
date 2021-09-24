import Actions from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOADER: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default loaderReducer;
