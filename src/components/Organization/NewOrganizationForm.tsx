import React from 'react';
import { useSelector } from 'react-redux';
import { OrganizationFormState } from '../../store/reducer/organization.reducer';
import { RootState } from '../../store/store';
import OrganizationFormGame from './NewOrganizationFormGame';
import OrganizationFormGeneral from './NewOrganizationFormGeneral';
import OrganizationFormMembers from './NewOrganizationFormMembers';

const NewOrganizationForm: React.FC = () => {
  const selector = useSelector<RootState, RootState['organizationFormReducer']>(
    (state) => state.organizationFormReducer,
  ) as OrganizationFormState;

  return (
    <>
      {selector.isShowGeneralForm && <OrganizationFormGeneral />}
      {selector.isShowMembersForm && <OrganizationFormMembers />}
      {selector.isShowGamesForm && <OrganizationFormGame />}
    </>
  );
};

export default NewOrganizationForm;
