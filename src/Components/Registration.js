import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
/**/
import PropTypes from 'prop-types';
/** */

import Actions from '../actions/actionTypes';

const Registration = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Registration with E-mail</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRegister({ email, password });
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
Registration.propTypes = {
  onRegister: PropTypes.func,
};
/** */

const ConnectedRegistration = connect(null, (dispatch) => {
  return {
    onRegister: ({ email, password }) =>
      dispatch({
        type: Actions.REGISTER,
        payload: {
          email: email,
          password: password,
        },
      }),
  };
})(Registration);

export default ConnectedRegistration;
