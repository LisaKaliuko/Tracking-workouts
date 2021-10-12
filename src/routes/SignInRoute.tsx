import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn/SignIn';
import { selectUser } from '../core/selectors/selectors';
import { useTypedSelector } from '../core/hooks/useTypedSelector';
import { PATHES } from '../constants/constants';

interface ISignInRouteProps {
  path: string;
}

const SignInRoute: FC<ISignInRouteProps> = ({ path }): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <SignIn /> : <Redirect to={PATHES.CALENDAR} />}
    </Route>
  );
};

export default SignInRoute;
