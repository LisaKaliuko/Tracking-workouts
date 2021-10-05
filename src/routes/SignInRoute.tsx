import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from '../components/pages/SignIn/SignIn';
import { selectUser } from '../core/selectors/selectors';

interface SignInRouteProps {
  path: string;
}

const SignInRoute = ({ path }: SignInRouteProps): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <SignIn /> : <Redirect to="/calendar" />}
    </Route>
  );
};

export default SignInRoute;
