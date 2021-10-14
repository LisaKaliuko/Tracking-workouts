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
    categories: Array<Category>;
    exercises: Array<Exercise>;
    categoriesError: string | null;
    exercisesError: string | null;
  };
  isLoading: boolean;
}

const initialState: InitialStateWorkout = {
  currentWorkout: {
    date: null,
    category: null,
    exercise: null,
  },
  data: {
    categories: [],
    exercises: [],
    categoriesError: null,
    exercisesError: null,
  },
  isLoading: false,
};

const workoutReducer = handleActions<InitialStateWorkout>(
  {
    [WorkoutActionsTypes.GET_CATEGORIES]: (state: InitialStateWorkout) => ({
      ...state,
      isLoading: true,
    }),

    [WorkoutActionsTypes.GET_CATEGORIES_SUCCESS]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      data: { ...state.data, ...action.payload },
      isLoading: false,
    }),

    [WorkoutActionsTypes.GET_CATEGORIES_ERROR]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      data: { ...state.data, ...action.payload },
      isLoading: false,
    }),

    [WorkoutActionsTypes.GET_EXERCISES]: (state: InitialStateWorkout) => ({
      ...state,
      isLoading: true,
    }),

    [WorkoutActionsTypes.GET_EXERCISES_SUCCESS]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      data: { ...state.data, ...action.payload },
      isLoading: false,
    }),

    [WorkoutActionsTypes.GET_EXERCISES_ERROR]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      data: { ...state.data, ...action.payload },
      isLoading: false,
    }),

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
      currentWorkout: { ...state.currentWorkout, ...action.payload },
    }),

    [WorkoutActionsTypes.EXERCISE]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({
      ...state,
      currentWorkout: { ...state.currentWorkout, ...action.payload },
    }),

    [WorkoutActionsTypes.LOG_OUT_WORKOUT]: () => initialState,
  },
  initialState
);

export default workoutReducer;
