import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screen/Login';
import RegisterUserScreen from './screen/RegisterUser';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" render={() => <LoginScreen />} />
          <Route path="/register" render={() => <RegisterUserScreen />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
