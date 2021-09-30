import Actions from '../actions/actionTypes';

const initialState = {
  user: {
    email: null,
    uid: null,
    error: null,
    arrOfWorkouts: [],
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SIGN_IN: {
      const user = action.payload.user;
      return {
        ...state,
        user: {
          ...state.user,
          error: null,
          uid: user.uid,
          email: user.email,
          arrOfWorkouts: user.arrOfWorkouts,
        },
      };
    }
    case Actions.LOG_OUT: {
      return { ...initialState };
    }
    case Actions.ERROR: {
      const error = action.payload.error;
      return {
        ...state,
        user: { ...state.user, error },
      };
    }
    case Actions.WORKOUT: {
      const prevDates = state.user.arrOfWorkouts;
      const arrOfWorkouts = prevDates.concat({ ...action.payload.date });
      return { ...state, user: { ...state.user, arrOfWorkouts } };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
