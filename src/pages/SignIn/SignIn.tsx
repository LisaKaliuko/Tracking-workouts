import React, { useState, ChangeEvent, FormEvent } from 'react';

import { signInUser } from '../../firebase';
import { selectUser } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useTypedSelector(selectUser);

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const enterUser = (e: FormEvent) => {
    e.preventDefault();
    signInUser(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="d-flex flex-column w-25 m-auto mt-5">
      <h3>Войти</h3>
      <form onSubmit={enterUser}>
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
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
