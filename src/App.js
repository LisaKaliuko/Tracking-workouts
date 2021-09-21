import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import SignInRoute from './routes/SignInRoute';
import RegistrationRoute from './routes/RegistrationRoute';
import PrivateRoute from './routes/PrivateRoute';
import Calendar from './components/Calendar/Calendar';
import Categories from './components/Categories/Categories';
import ExercisesList from './components/ExercisesList/ExercisesList';
import Exercise from './components/Exercise/Exercise';

function App() {
  return (
    <>
      <Router>
        <Menu />
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
