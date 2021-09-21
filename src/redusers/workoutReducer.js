import Actions from '../actions/actionTypes';

const initialState = {
  dates: [],
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.DAY: {
      const prevDates = state.dates;
      const dates = prevDates.concat(action.payload);
      return { ...state, dates: dates };
    }
    case Actions.WORKOUT: {
      state.dates[state.dates.length - 1].isWorkout = true;
      return { ...state };
    }
    case Actions.CATEGORY: {
      return { ...state, ...action.payload };
    }
    case Actions.ARRAY_OF_EXERCISES: {
      return { ...state, ...action.payload };
    }
    case Actions.EXERCISE: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default workoutReducer;
