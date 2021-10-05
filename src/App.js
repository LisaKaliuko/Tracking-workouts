import React, { useEffect } from 'react';
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
import { isSignIn } from './firebase';

function App() {
  useEffect(() => {
    isSignIn();
  }, []);

  return (
    <>
      <Router>
        <Menu />
        <Loader />
        <Switch>
          <Redirect exact from="/" to="/signin" />
          <RegistrationRoute path="/registration" exact />
          <SignInRoute path="/signin" exact />
          <PrivateRoute path="/calendar">
            <Calendar />
          </PrivateRoute>
          <PrivateRoute path="/categories">
            <Categories />
          </PrivateRoute>
          <PrivateRoute path="/exercises">
            <ExercisesList />
          </PrivateRoute>
          <PrivateRoute path="/exercises:id">
            <Exercise />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
