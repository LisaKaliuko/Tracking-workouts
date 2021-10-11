import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redusers/rootReducer';

const getAuth = (state: RootState) => state.auth;
const getLoader = (state: RootState) => state.loader;
const getWorkout = (state: RootState) => state.workout;

export const selectUser = createSelector(getAuth, (auth) => auth.user);

export const selectAllCategories = createSelector(
  getWorkout,
  (workout) => workout.data.categories
);

export const selectExercises = createSelector(
  getWorkout,
  (workout) => workout.data.exercises
);

export const selectCurrentDate = createSelector(
  getWorkout,
  (workout) => workout.currentWorkout.date
);

export const selectCurrentCategory = createSelector(
  getWorkout,
  (workout) => workout.currentWorkout.category
);

export const selectCurrentExercise = createSelector(
  getWorkout,
  (workout) => workout.currentWorkout.exercise
);

export const selectArrOfWorkouts = createSelector(
  getAuth,
  (auth) => auth.user.arrOfWorkouts
);

export const selectLoading = createSelector(
  getLoader,
  (loader) => loader.isLoading
);