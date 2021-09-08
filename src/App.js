import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivatRoute';
import SignIn from './routes/SignIn';
import Calendar from './Components/Calendar';
import Menu from './Components/Menu';
import SignInEmail from './Components/SignInEmail';
import ConnectedRegistration from './Components/Registration';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Router>
        <Menu />
        <Switch>
          <PrivateRoute path="/calendar">
            <Calendar />
          </PrivateRoute>
          <Route path="/registration" component={ConnectedRegistration} />
          <Route path="/signinemail" component={SignInEmail} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
