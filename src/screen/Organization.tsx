import React from 'react';
import { useSelector } from 'react-redux';
import NewOrganization from '../components/Organization/NewOrganization';
import { UserState } from '../store/reducer/user.reducer';
import { RootState } from '../store/store';

type S = RootState;
const OrganizationScreen: React.FC = () => {
  const userSelector = useSelector<S, S['userReducer']>(
    (state) => state.userReducer,
  ) as UserState;

  return (
    <div>
      {userSelector.user.organization !== null ? (
        <p>Ya tienes una organizacion </p>
      ) : (
        <NewOrganization />
      )}
    </div>
  );
};

export default OrganizationScreen;
