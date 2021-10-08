import { firestore } from '../..';
import { ICategory, IExercise } from '../interfaces/WorkoutInterfaces';

export const getCategories = (): Promise<Array<ICategory>> => {
  return firestore
    .collection('categories')
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
    );
};

export const getExercises = (categoryId: string): Promise<IExercise[]> => {
  return firestore
    .collection('exercises')
    .where('categoryId', '==', categoryId)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as IExercise));
};
