import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import SignInRoute from './routes/SignInRoute';
import RegistrationRoute from './routes/RegistrationRoute';
import PrivateRoute from './routes/PrivateRoute';
import Calendar from './pages/Calendar/Calendar';
import Categories from './pages/Categories/Categories';
import ExercisesList from './pages/ExercisesList/ExercisesList';
import Exercise from './pages/Exercise/Exercise';
import Loader from './components/Loader/Loader';
import { PATHES } from './constants/constants';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Menu />
        <Loader />
        <Switch>
          <Redirect exact from="/" to={PATHES.SIGN_IN} />
          <RegistrationRoute path={PATHES.REGISTRATION} />
          <SignInRoute path={PATHES.SIGN_IN} />
          <PrivateRoute path={PATHES.CALENDAR}>
            <Calendar />
          </PrivateRoute>
          <PrivateRoute path={PATHES.CATEGORIES}>
            <Categories />
          </PrivateRoute>
          <PrivateRoute path={PATHES.EXERCISES_LIST}>
            <ExercisesList />
          </PrivateRoute>
          <PrivateRoute path={`${PATHES.EXERCISES_LIST}:id`}>
            <Exercise />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default App;
