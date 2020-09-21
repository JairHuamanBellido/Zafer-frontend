import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import userService from '../api/service/user.service';
import { UserActions } from '../store/actions/user.action';
import ChatScreen from './Chat';
import HomeScreen from './Home';
import OrganizationScreen from './Organization';

const HomeRouter: React.FC = () => {
  const { path } = useRouteMatch();
  const userDispatch = useDispatch<Dispatch<UserActions>>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getUserInformation() {
      setLoading(true);
      userService.getPersonalInformation().then((res) => {
        userDispatch({ type: 'SET_USER_SUCCESS', payload: res });
        setLoading(false);
      });
    }
    getUserInformation();
  }, [userDispatch]);
  if (!loading) {
    return (
      <>
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
      </>
    );
  }
  return <p>Cargando...</p>;
};

export default HomeRouter;
