import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Registration from '../components/Registration/Registration';

/**/
import PropTypes from 'prop-types';
/** */

const RegistrationRoute = ({ path }) => {
  const user = useSelector((state) => state.auth.user);
  const isUserIn = JSON.parse(sessionStorage.getItem('isUserIn'));

  return (
    <Route path={path}>
      {!user.isUserIn || !isUserIn ? (
        <Registration />
      ) : (
        <Redirect to="/calendar" />
      )}
    </Route>
  );
};

/** */
RegistrationRoute.propTypes = {
  path: PropTypes.string,
};

export default RegistrationRoute;
