import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
/*proptypes cuz eslint*/
import PropTypes from 'prop-types';
/**/

const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
/*proptypes cuz eslint*/
PrivateRoute.propTypes = {
  children: PropTypes.any,
};
/**/
export default PrivateRoute;
