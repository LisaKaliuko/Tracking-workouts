import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { Day } from '../interfaces/WorkoutInterfaces';
import { Category, Exercise } from '../interfaces/WorkoutInterfaces';
import { WorkoutActionsTypes } from '../actions/WorkoutActions';

interface InitialStateWorkout {
  currentWorkout: {
    date: Day | null;
    category: Category | null;
    exercise: Exercise | null;
  };
  data: {
    categories: Array<Category> | null;
    exercises: Array<Exercise> | null;
  };
  serverError: string | null;
}

const initialState: InitialStateWorkout = {
  currentWorkout: {
    date: null,
    category: null,
    exercise: null,
  },
  data: {
    categories: null,
    exercises: null,
  },
  serverError: null,
};

const workoutReducer = handleActions<InitialStateWorkout>(
  {
    [WorkoutActionsTypes.SET_CATEGORIES]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({ ...state, data: { ...state.data, categories: action.payload } }),

    [WorkoutActionsTypes.SET_EXERCISES]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({ ...state, data: { ...state.data, exercises: action.payload } }),

    [WorkoutActionsTypes.SERVER_ERROR]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({ ...state, serverError: action.payload }),

    [WorkoutActionsTypes.DAY]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      currentWorkout: { ...state.currentWorkout, date: action.payload },
    }),

    [WorkoutActionsTypes.CATEGORY]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      currentWorkout: { ...state.currentWorkout, category: action.payload },
    }),

    [WorkoutActionsTypes.EXERCISE]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      currentWorkout: { ...state.currentWorkout, exercise: action.payload },
    }),
  },
  initialState
);

export default workoutReducer;
