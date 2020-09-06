import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screen/Login';
import RegisterUserScreen from './screen/RegisterUser';
import RegisterUserSuccessScreen from './screen/RegisterUserSuccess';
import HomeScreen from './screen/Home';
import RouterGuard from './guards/RouterGuard';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <RouterGuard redirect="/login" component={<HomeScreen />} />
            )}
          />
          <Route path="/login" render={() => <LoginScreen />} />
          <Route
            exact={true}
            path="/register"
            render={() => <RegisterUserScreen />}
          />
          <Route
            exact={true}
            path="/register/success"
            render={() => <RegisterUserSuccessScreen />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
