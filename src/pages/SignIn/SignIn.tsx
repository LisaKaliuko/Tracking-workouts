import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import { useDispatch } from 'react-redux';

import { selectAuthErrors } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { signin } from '../../core/actions/UserActions';
import { Input, Warning, Button } from '../../shared/styles/sharedStyles';
import { FormContainer } from './styles';

const SignIn: FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useTypedSelector(selectAuthErrors);
  const dispatch = useDispatch();

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const enterUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(signin({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <h3>Войти</h3>
      <form onSubmit={enterUser}>
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
        {errors.signinError ? <Warning>{errors.signinError}</Warning> : null}
        <Button type="submit">Войти</Button>
      </form>
    </FormContainer>
  );
};

export default SignIn;
