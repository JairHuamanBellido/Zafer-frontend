import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import NewOrganization from '../components/Organization/NewOrganization';
import { RootState } from '../store/store';

const OrganizationScreen: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.userReducer.user,
    shallowEqual,
  );

  return (
    <div>
      {user.organization !== null ? (
        <p>Ya tienes una organizacion </p>
      ) : (
        <NewOrganization />
      )}
    </div>
  );
};

export default OrganizationScreen;
