import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidebar from '../common/Sidebar/Sidebar';
import HeaderBar from '../common/HeaderBar/HeaderBar';
import HomeScreen from './Home';
import ChatScreen from './Chat';
import OrganizationScreen from './Organization';

const HomeLayoutScreen: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div className="home-container">
      <Sidebar />
      <div>
        <HeaderBar />
        <Switch>
          <Route exact={true} path={`${path}`} render={() => <HomeScreen />} />
          <Route
            exact={true}
            path={`${path}/chat`}
            render={() => <ChatScreen />}
          />
          <Route
            exact={true}
            path={`${path}/organization`}
            render={() => <OrganizationScreen />}
          />
        </Switch>
      </div>
    </div>
  );
};
export default HomeLayoutScreen;
