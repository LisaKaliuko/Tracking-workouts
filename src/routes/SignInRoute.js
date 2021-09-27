import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from '../components/SignIn/SignIn';
import { selectUser } from '../selectors/selectors';

/** */
import PropTypes from 'prop-types';
/** */

const SignInRoute = ({ path }) => {
  const user = useSelector(selectUser);
  const isUserIn = JSON.parse(sessionStorage.getItem('isUserIn'));

  return (
    <Route path={path}>
      {!user.isUserIn && !isUserIn ? <SignIn /> : <Redirect to="/calendar" />}
    </Route>
  );
};

/** */
SignInRoute.propTypes = {
  path: PropTypes.string,
};
/** */

export default SignInRoute;
