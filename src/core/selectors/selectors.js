import { createSelector } from 'reselect';

const getAuth = (state) => state.auth;
const getLoader = (state) => state.loader;
const getWorkout = (state) => state.workout;

export const selectUser = createSelector(getAuth, (auth) => auth.user);

export const selectCategory = createSelector(
  getWorkout,
  (workout) => workout.currentWorkout.category
);

export const selectExercise = createSelector(
  getWorkout,
  (workout) => workout.currentWorkout.exercise
);

export const selectWorkoutDate = createSelector(
  getWorkout,
  (workout) => workout.currentWorkout.date
);

export const selectArrOfWorkouts = createSelector(
  getAuth,
  (auth) => auth.user.arrOfWorkouts
);

export const selectLoading = createSelector(
  getLoader,
  (loader) => loader.isLoading
);
