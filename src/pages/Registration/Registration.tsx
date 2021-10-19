import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../core/actions/UserActions';
import { selectAuthErrors } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { Input, Button, Warning } from '../../shared/styles/sharedStyles';
import { FormContainer } from './styles';

const Registration: FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useTypedSelector(selectAuthErrors);
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
    <FormContainer>
      <h3>Регистрация</h3>
      <form onSubmit={registerNewUser}>
        <div>
          <label htmlFor="email">E-mail</label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </div>
        {errors?.registerError ? (
          <Warning>{errors?.registerError}</Warning>
        ) : null}
        <Button type="submit">Регистрация</Button>
      </form>
    </FormContainer>
  );
};

export default Registration;
