import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrganizationFormGame from './NewOrganizationFormGame';
import OrganizationFormGeneral from './NewOrganizationFormGeneral';
import OrganizationFormMembers from './NewOrganizationFormMembers';

const NewOrganizationForm: React.FC = () => {
  const selector = useSelector((state: RootState) => {
    return {
      isShowGeneralForm: state.organizationFormReducer.isShowGeneralForm,
      isShowMembersForm: state.organizationFormReducer.isShowMembersForm,
      isShowGamesForm: state.organizationFormReducer.isShowGamesForm,
    };
  }, shallowEqual);

  return (
    <>
      {selector.isShowGeneralForm && <OrganizationFormGeneral />}
      {selector.isShowMembersForm && <OrganizationFormMembers />}
      {selector.isShowGamesForm && <OrganizationFormGame />}
    </>
  );
};

export default NewOrganizationForm;
