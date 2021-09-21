import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { registerUser } from '../../firebase';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="d-flex flex-column w-25 m-auto mt-5">
      <h3>Регистрация</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser(email, password);
          setEmail('');
          setPassword('');
        }}
      >
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Пароль</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
