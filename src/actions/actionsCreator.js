import { store } from '../index';

import Actions from './actionTypes';

export const setNewUser = (user) => {
  store.dispatch({
    type: Actions.REGISTER,
    payload: {
      user: {
        email: user.email,
        uid: user.uid,
        isUserIn: true,
        error: null,
      },
    },
  });
};

export const setUser = (user) => {
  store.dispatch({
    type: Actions.SIGN_IN,
    payload: {
      user: {
        email: user.email,
        uid: user.uid,
        isUserIn: true,
        error: null,
      },
    },
  });
};

export const setLogOut = () => {
  store.dispatch({
    type: Actions.LOG_OUT,
    payload: {
      user: {
        email: null,
        uid: null,
        isUserIn: false,
        error: null,
      },
    },
  });
};

export const setError = (error) => {
  store.dispatch({
    type: Actions.ERROR,
    payload: {
      user: {
        email: null,
        uid: null,
        isUserIn: false,
        error: error.message,
      },
    },
  });
};

export const setCategory = (category) => {
  store.dispatch({
    type: Actions.CATEGORY,
    payload: {
      category: category,
    },
  });
};

export const setExercises = (arr) => {
  store.dispatch({
    type: Actions.ARRAY_OF_EXERCISES,
    payload: {
      arrOfExercises: arr,
    },
  });
};

export const setExercise = (exercise) => {
  store.dispatch({
    type: Actions.EXERCISE,
    payload: {
      exercise: exercise,
    },
  });
};

export const setWorkoutDay = (year, month, day) => {
  store.dispatch({
    type: Actions.DAY,
    payload: {
      year: year,
      month: month,
      day: day,
      isWorkout: false,
    },
  });
};

export const setWorkout = () => {
  store.dispatch({
    type: Actions.WORKOUT,
    payload: {
      isWorkout: true,
    },
  });
};
