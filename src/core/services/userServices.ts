import { auth, firestore } from '../..';
import { Day } from '../interfaces/WorkoutInterfaces';

export const registerUser = (email: string, password: string): string => {
  auth.createUserWithEmailAndPassword(email, password).then((resp) => {
    if (resp.user && resp.user.email) {
      firestore.collection('users').doc(resp.user.email).set({
        email: resp.user.email,
        arrOfWorkouts: [],
      });
    }
  });
  return email;
};

export const signInUser = (
  email: string,
  password: string
): Promise<string | null | undefined> => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => user.user?.email);
};

export const logOutUser = (): Promise<void> => auth.signOut();

export const getWorkouts = (email: string): Promise<Array<Day>> => {
  return firestore
    .collection('users')
    .doc(email)
    .get()
    .then((doc) => doc.data()?.arrOfWorkouts);
};

export const addNewWorkoutDay = (
  email: string,
  arr: Array<Day>,
  day: Day,
  cb: () => void
): void => {
  const newDates = [...arr, day];

  firestore
    .collection('users')
    .doc(email)
    .update({
      arrOfWorkouts: newDates,
    })
    .then(() => cb());
};
