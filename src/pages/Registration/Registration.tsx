import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../core/actions/UserActions';
import { selectUser } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';

const Registration: FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useTypedSelector(selectUser);
  const dispatch = useDispatch();

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const registerNewUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register({ email, password }));
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
        {user.registerError ? (
          <p className="text-danger mb-0">{user.registerError}</p>
        ) : null}
        <button type="submit" className="btn btn-primary mt-3">
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default Registration;
