import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
import { themePink, themeBlack } from './theme/index';
import { useTypedSelector } from './core/hooks/useTypedSelector';
import { selectTheme } from './core/selectors/selectors';

const App: FC = (): JSX.Element => {
  const creative_theme = useTypedSelector(selectTheme);

  return (
    <ThemeProvider theme={creative_theme ? themePink : themeBlack}>
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
    </ThemeProvider>
  );
};

export default App;
