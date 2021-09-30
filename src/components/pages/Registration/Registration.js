import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { registerUser } from '../../../firebase';
import { selectUser } from '../../../core/selectors/selectors';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(selectUser);

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const registerNewUser = (e) => {
    e.preventDefault();
    registerUser(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="d-flex flex-column w-25 m-auto mt-5">
      <h3>Регистрация</h3>
      <form onSubmit={registerNewUser}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Пароль</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </div>
        {user.error ? <p className="text-danger mb-0">{user.error}</p> : null}
        <button type="submit" className="btn btn-primary mt-3">
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default Registration;
