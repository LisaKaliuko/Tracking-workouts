export interface IDay {
  year: number;
  month: number;
  day: number;
}

export interface ICategory {
  id: string;
  title: string;
}

export interface IExercise {
  categoryId: string;
  description: string;
  id: string;
  img: string;
  name: string;
  repeats: number;
  sets: number;
}
