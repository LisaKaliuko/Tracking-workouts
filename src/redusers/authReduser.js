import firebase from 'firebase/app';

import Actions from '../actions/actionTypes';

const initState = {};

// const createNewUser = ({ email, password }) => {
//   firebase.createUser({ email, password });
// };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.REGISTER: {
      console.log(
        'register user: ',
        action.payload.email,
        action.payload.password
      );
      //createNewUser({ ...action.payload });
      return state;
    }
    case Actions.SIGN_IN: {
      console.log(
        'sign in user: ',
        action.payload.email,
        action.payload.password
      );
      firebase
        .login({
          email: action.payload.email,
          password: action.payload.password,
        })
        .then((response) => console.log('logged', response));
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
