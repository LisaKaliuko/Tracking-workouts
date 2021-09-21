import Actions from '../actions/actionTypes';
/**
 store = {
   user: {
     email: test@mail.ru,
     uid:46ryfhry5746,
     isUserIn: true,
     error: null
   }
 }
*/

const initialState = {
  user: {
    email: null,
    uid: null,
    isUserIn: false,
    error: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REGISTER: {
      return { ...state, ...action.payload };
    }
    case Actions.SIGN_IN: {
      return { ...state, ...action.payload };
    }
    case Actions.LOG_OUT: {
      return { ...state, ...action.payload };
    }
    case Actions.ERROR: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
