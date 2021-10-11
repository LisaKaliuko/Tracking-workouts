export interface Day {
  year: number;
  month: number;
  day: number;
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
