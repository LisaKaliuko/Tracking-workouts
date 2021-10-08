import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { selectUser } from '../core/selectors/selectors';
import { useTypedSelector } from '../core/hooks/useTypedSelector';
import { pathes } from '../constants/constants';

interface IPrivateRouteProps {
  path: string;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  path,
  children,
}): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path}>
      {user.email ? children : <Redirect to={pathes.SIGN_IN} />}
    </Route>
  );
};

export default PrivateRoute;
