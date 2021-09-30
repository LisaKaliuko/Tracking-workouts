import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Registration from '../components/pages/Registration/Registration';
import { selectUser } from '../core/selectors/selectors';

/**/
import PropTypes from 'prop-types';
/** */

const RegistrationRoute = ({ path }) => {
  const user = useSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <Registration /> : <Redirect to="/calendar" />}
    </Route>
  );
};

/** */
RegistrationRoute.propTypes = {
  path: PropTypes.string,
};

export default RegistrationRoute;
