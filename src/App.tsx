import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screen/Login';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" render={() => <LoginScreen />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
