import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn/SignIn';
import { selectUser } from '../core/selectors/selectors';
import { useTypedSelector } from '../core/hooks/useTypedSelector';
import { pathes } from '../constants/constants';

interface SignInRouteProps {
  path: string;
}

const SignInRoute = ({ path }: SignInRouteProps): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <SignIn /> : <Redirect to={pathes.CALENDAR} />}
    </Route>
  );
};

export default SignInRoute;