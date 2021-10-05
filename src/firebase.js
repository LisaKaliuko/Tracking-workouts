import firebase from 'firebase/app';

import { firestore, store } from '.';
import { setUserAction, setLogOutAction } from './core/actions/UserActions';
import { setLoadingAction } from './core/actions/LoaderActions';
import { setErrorAction } from './core/actions/UserActions';

export const isSignIn = () => {
  store.dispatch(setLoadingAction(true));
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firestore
        .collection('users')
        .where('email', '==', user.email)
        .get()
        .then((snapshot) => {
          snapshot.docs.map((doc) =>
            store.dispatch(
              setUserAction({
                uid: doc.data().uid,
                email: doc.data().email,
                arrOfWorkouts: doc.data().arrOfWorkouts,
              })
            )
          );
        })
        .then(() => store.dispatch(setLoadingAction(false)));
    } else {
      store.dispatch(setLogOutAction());
      store.dispatch(setLoadingAction(false));
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
      store.dispatch(setErrorAction(error));
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
      store.dispatch(setErrorAction(error));
    });
};

export const logOutUser = () => {
  firebase.logout().then(() => {
    isSignIn();
  });
};

export const setDataToFirestore = (callback) => {
  store.dispatch(setLoadingAction(true));
  const userEmail = store.getState().auth.user.email;
  const arrOfWorkouts = store.getState().auth.user.arrOfWorkouts;
  firestore
    .collection('users')
    .doc(userEmail)
    .update({
      arrOfWorkouts: arrOfWorkouts,
    })
    .then(() => callback())
    .then(() => store.dispatch(setLoadingAction(false)));
};
