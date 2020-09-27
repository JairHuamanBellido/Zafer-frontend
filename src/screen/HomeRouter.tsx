import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import requestInvitationService from '../api/service/request-invitation.service';
import userService from '../api/service/user.service';
import { GlobalListenerEvent } from '../api/socket/Global.socket';
import { RequestInvitationEvent } from '../api/socket/RequestInvitation.socket';
import { UserActions } from '../store/actions/user.action';
import { NotificationInviteActions as NotificationAction } from '../store/actions/notification-invite.action';
import ChatScreen from './Chat';
import HomeScreen from './Home';
import OrganizationScreen from './Organization';

const HomeRouter: React.FC = () => {
  const { path } = useRouteMatch();
  const userDispatch = useDispatch<Dispatch<UserActions>>();
  const requestDispatch = useDispatch<Dispatch<NotificationAction>>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getUserInformation() {
      setLoading(true);
      userService.getPersonalInformation().then((res) => {
        userDispatch({ type: 'SET_USER_SUCCESS', payload: res });
        GlobalListenerEvent.joinPersonRoom(res.id);
        RequestInvitationEvent.joinRoom(res.id);
        setLoading(false);
      });
    }

    async function getAllNotificationsRequest() {
      try {
        const notifications = await requestInvitationService.getAll();
        requestDispatch({ type: 'ADD_NOTIFICATIONS', payload: notifications });
      } catch (_) {
        setLoading(false);
      }
    }

    getAllNotificationsRequest();
    getUserInformation();
  }, [userDispatch, requestDispatch]);

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
