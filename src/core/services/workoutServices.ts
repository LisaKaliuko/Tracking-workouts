import { firestore } from '../..';
import { Category, Exercise } from '../interfaces/WorkoutInterfaces';

export const getCategories = (): Promise<Array<Category>> => {
  return firestore
    .collection('categories')
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
    );
};

export const getExercises = (categoryId: string): Promise<Exercise[]> => {
  return firestore
    .collection('exercises')
    .where('categoryId', '==', categoryId)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as Exercise));
};
