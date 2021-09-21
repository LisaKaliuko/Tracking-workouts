import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

/** */
import PropTypes from 'prop-types';

/**/

const PrivateRoute = ({ path, children }) => {
  const isUserIn = JSON.parse(sessionStorage.getItem('isUserIn'));
  const user = useSelector((state) => state.auth.user);

  return (
    <Route path={path}>
      {isUserIn || user.isUserIn ? children : <Redirect to="/signin" />}
    </Route>
  );
};

/** */
PrivateRoute.propTypes = {
  path: PropTypes.string,
  children: PropTypes.any,
};
/** */

export default PrivateRoute;
