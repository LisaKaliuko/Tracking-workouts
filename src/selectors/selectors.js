import { createSelector } from 'reselect';

const getAuth = (state) => state.auth;
const getLoader = (state) => state.loader;
const getWorkout = (state) => state.workout;

export const selectUser = createSelector(getAuth, (auth) => auth.user);

export const selectUserEmail = createSelector(
  getAuth,
  (auth) => auth.user.email
);

export const selectLoading = createSelector(
  getLoader,
  (loader) => loader.isLoading
);

export const selectCategory = createSelector(
  getWorkout,
  (workout) => workout.category
);

export const selectArrOfExercises = createSelector(
  getWorkout,
  (workout) => workout.arrOfExercises
);

export const selectExercise = createSelector(
  getWorkout,
  (workout) => workout.exercise
);
