import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Registration from '../components/pages/Registration/Registration';
import { selectUser } from '../core/selectors/selectors';

interface RegistrationRouteProps {
  path: string;
}

const RegistrationRoute = ({ path }: RegistrationRouteProps): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <Registration /> : <Redirect to="/calendar" />}
    </Route>
  );
};

export default RegistrationRoute;
