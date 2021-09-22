import firebase from 'firebase/app';

import { firestore, store } from '.';
import {
  setNewUser,
  setUser,
  setLogOut,
  setError,
} from './actions/actionsCreator';

const isSignIn = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setNewUser(user);
      setUser(user);
    } else {
      setLogOut();
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
        dates: [],
      });
    })
    .then((user) => isSignIn(user))
    .then(() => sessionStorage.setItem('isUserIn', true))
    .catch((error) => {
      setError(error);
      sessionStorage.setItem('isUserIn', false);
    });
};

export const signInUser = (email, password) => {
  firebase
    .login({
      email: email,
      password: password,
    })
    .then((user) => isSignIn(user))
    .then(() => sessionStorage.setItem('isUserIn', true))
    .catch((error) => {
      setError(error);
      sessionStorage.setItem('isUserIn', false);
    });
};

export const logOutUser = () => {
  firebase
    .logout()
    .then(() => sessionStorage.setItem('isUserIn', false))
    .then(() => isSignIn());
};

export const setDataToFirestore = (cb) => {
  const user = store.getState().auth.user.email;
  const workout =
    store.getState().workout.dates[store.getState().workout.dates.length - 1];
  let docRef;
  user && workout
    ? (docRef = firestore.collection('users').doc(user))
    : console.log('no user or workout');

  docRef
    ? docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            firestore
              .collection('users')
              .doc(user)
              .set({
                ...doc.data(),
                dates: [...doc.data().dates, workout],
              })
              .catch((err) => console.log('add day err', err));
          } else {
            console.log('doc doesnt exist');
          }
        })
        .then(() => cb())
        .catch((err) => console.log('error', err))
    : console.log('no docRef');
};
