import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Registration from '../pages/Registration/Registration';
import { selectUser } from '../core/selectors/selectors';
import { useTypedSelector } from '../core/hooks/useTypedSelector';
import { PATHES } from '../constants/constants';

interface IRegistrationRouteProps {
  path: string;
}

const RegistrationRoute: FC<IRegistrationRouteProps> = ({
  path,
}): JSX.Element => {
  const user = useTypedSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <Registration /> : <Redirect to={PATHES.CALENDAR} />}
    </Route>
  );
};

export default RegistrationRoute;
