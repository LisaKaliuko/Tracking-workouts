import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from '../components/pages/SignIn/SignIn';
import { selectUser } from '../core/selectors/selectors';

/** */
import PropTypes from 'prop-types';
/** */

const SignInRoute = ({ path }) => {
  const user = useSelector(selectUser);

  return (
    <Route path={path}>
      {!user.email ? <SignIn /> : <Redirect to="/calendar" />}
    </Route>
  );
};

/** */
SignInRoute.propTypes = {
  path: PropTypes.string,
};
/** */

export default SignInRoute;
