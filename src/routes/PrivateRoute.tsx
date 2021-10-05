import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../core/selectors/selectors';

interface PrivateRouteProps {
  path: string;
  children: React.ReactNode;
}

const PrivateRoute = ({ path, children }: PrivateRouteProps): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <Route path={path}>
      {user.email ? children : <Redirect to="/signin" />}
    </Route>
  );
};

export default PrivateRoute;
