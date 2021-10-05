import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import { Day } from '../actions/UserActions';
import {
  Category,
  Exercise,
  WorkoutActionsTypes,
} from '../actions/WorkoutActions';

interface InitialStateWorkout {
  date: Day | null;
  category: Category | null;
  exercise: Exercise | null;
}

const initialState: InitialStateWorkout = {
  date: null,
  category: null,
  exercise: null,
};

const workoutReducer = handleActions<InitialStateWorkout>(
  {
    [WorkoutActionsTypes.DAY]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({ ...state, date: action.payload }),
    [WorkoutActionsTypes.CATEGORY]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({ ...state, category: action.payload }),
    [WorkoutActionsTypes.EXERCISE]: (
      state: InitialStateWorkout,
      action: AnyAction
    ) => ({ ...state, exercise: action.payload }),
  },
  initialState
);

export default workoutReducer;
