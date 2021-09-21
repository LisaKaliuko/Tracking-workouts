import firebase from 'firebase/app';

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
