import { store } from '../../index';

import Actions from './actionTypes';

export const setUser = (user) => {
  store.dispatch({
    type: Actions.SIGN_IN,
    payload: {
      user,
    },
  });
};

export const setLogOut = () => {
  store.dispatch({
    type: Actions.LOG_OUT,
    payload: {},
  });
};

export const setError = (error) => {
  store.dispatch({
    type: Actions.ERROR,
    payload: {
      error: error.message,
    },
  });
};

export const setDay = (year, month, day) => {
  store.dispatch({
    type: Actions.DAY,
    payload: {
      year: year,
      month: month,
      day: day,
    },
  });
};

export const setCategory = (category) => {
  store.dispatch({
    type: Actions.CATEGORY,
    payload: {
      category,
    },
  });
};

export const setExercise = (exercise) => {
  store.dispatch({
    type: Actions.EXERCISE,
    payload: {
      exercise,
    },
  });
};

export const setWorkoutToArrOfWorkouts = (date) => {
  store.dispatch({
    type: Actions.WORKOUT,
    payload: {
      date,
    },
  });
};

export const setLoading = (boolean) => {
  store.dispatch({
    type: Actions.LOADER,
    payload: {
      isLoading: boolean,
    },
  });
};
