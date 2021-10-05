import { createAction } from '@reduxjs/toolkit';

export enum WorkoutActionsTypes {
  DAY = '[WORKOUT] DAY',
  CATEGORY = '[WORKOUT] CATEGORY',
  EXERCISE = '[WORKOUT] EXERCISE',
}

export interface Category {
  id: string;
  title: string;
}

export interface Exercise {
  categoryId: string;
  description: string;
  id: string;
  img: string;
  name: string;
  repeats: number;
  sets: number;
}

export const setDayAction = createAction(
  WorkoutActionsTypes.DAY,
  (year: number, month: number, day: number) => ({
    payload: { year, month, day },
  })
);
export const setCategoryAction = createAction(
  WorkoutActionsTypes.CATEGORY,
  (category: Category) => ({ payload: category })
);
export const setExerciseAction = createAction(
  WorkoutActionsTypes.EXERCISE,
  (exercise: Exercise) => ({ payload: exercise })
);
