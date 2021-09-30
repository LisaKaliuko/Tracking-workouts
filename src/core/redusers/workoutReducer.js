import Actions from '../actions/actionTypes';

const initialState = {
  currentWorkout: {
    date: {},
    category: {},
    exercise: {},
  },
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.DAY: {
      return {
        ...state,
        currentWorkout: { ...state.currentWorkout, date: action.payload },
      };
    }
    case Actions.CATEGORY: {
      return {
        ...state,
        currentWorkout: {
          ...state.currentWorkout,
          ...action.payload,
        },
      };
    }
    case Actions.EXERCISE: {
      return {
        ...state,
        currentWorkout: {
          ...state.currentWorkout,
          ...action.payload,
        },
      };
    }
    case Actions.LOG_OUT: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default workoutReducer;
