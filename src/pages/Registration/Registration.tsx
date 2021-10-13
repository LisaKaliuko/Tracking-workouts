import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { register } from '../../core/actions/UserActions';
import { selectUser } from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { Input, Button, Warning } from '../../styles/sharedStyles';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
  margin: auto;
  margin-top: 40px;
`;

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
        {user.registerError ? <Warning>{user.registerError}</Warning> : null}
        <Button type="submit">Регистрация</Button>
      </form>
    </FormContainer>
  );
};

export default Registration;
