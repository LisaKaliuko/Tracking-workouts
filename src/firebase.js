import firebase from 'firebase/app';

import { firestore, store } from '.';
import {
  setUser,
  setLogOut,
  setError,
  setLoading,
} from './core/actions/actionsCreator';

export const isSignIn = () => {
  setLoading(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firestore
        .collection('users')
        .where('email', '==', user.email)
        .get()
        .then((snapshot) => {
          snapshot.docs.map((doc) =>
            setUser({
              uid: doc.data().uid,
              email: doc.data().email,
              arrOfWorkouts: doc.data().arrOfWorkouts,
            })
          );
        })
        .then(() => setLoading(false));
    } else {
      setLogOut();
      setLoading(false);
    }
  });
};

export const registerUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((resp) => {
      firestore.collection('users').doc(resp.user.email).set({
        email: resp.user.email,
        uid: resp.user.uid,
        arrOfWorkouts: [],
      });
    })
    .then((user) => isSignIn(user))
    .catch((error) => {
      setError(error);
    });
};

export const signInUser = (email, password) => {
  firebase
    .login({
      email: email,
      password: password,
    })
    .then((user) => {
      isSignIn(user);
    })
    .catch((error) => {
      setError(error);
    });
};

export const logOutUser = () => {
  firebase.logout().then(() => {
    isSignIn();
  });
};

export const setDataToFirestore = (callback) => {
  setLoading(true);
  const userEmail = store.getState().auth.user.email;
  const arrOfWorkouts = store.getState().auth.user.arrOfWorkouts;
  firestore
    .collection('users')
    .doc(userEmail)
    .update({
      arrOfWorkouts: arrOfWorkouts,
    })
    .then(() => callback())
    .then(() => setLoading(false));
};
