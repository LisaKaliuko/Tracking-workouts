import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import Actions from '../actions/actionTypes';

/**/
import PropTypes from 'prop-types';
/** */

const SignInEmail = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Sign In with E-mail</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSignIn({ email, password });
          setEmail('');
          setPassword('');
        }}
      >
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

/** */
SignInEmail.propTypes = {
  onSignIn: PropTypes.func,
};
/** */

const ConnectedSignIn = connect(null, (dispatch) => {
  return {
    onSignIn: ({ email, password }) =>
      dispatch({
        type: Actions.SIGN_IN,
        payload: {
          email: email,
          password: password,
        },
      }),
  };
})(SignInEmail);

export default ConnectedSignIn;
