import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  OrganizationActions,
  OrganizationFormActions,
} from '../../store/actions/organization.action';
import { OrganizationFormState } from '../../store/reducer/organization.reducer';
import { RootState } from '../../store/store';
import NewOrganizationConfirmation from './NewOrganizationConfirmation';
import NewOrganizationForm from './NewOrganizationForm';
import NewOrganizationSucces from './NewOrganizationSuccess';

const NewOrganizationWelcome: React.FC = () => {
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();

  const showOrganizationFormGeneral = (): void => {
    dispatch({ type: 'SHOW_GENERAL_REGISTER', payload: true });
  };

  return (
    <div className="organization-container__welcome">
      <h2>Nueva Organización</h2>
      <p>Crear tu organización junto con tus amigos</p>
      <button onClick={showOrganizationFormGeneral} type="button">
        {' '}
        Crear
      </button>
    </div>
  );
};

const NewOrganization: React.FC = () => {
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const selector = useSelector<RootState, RootState['organizationFormReducer']>(
    (state) => state.organizationFormReducer,
  ) as OrganizationFormState;

  useEffect(() => {
    dispatch({ type: 'SHOW_WELCOME_REGISTER', payload: true });
  }, [dispatch]);

  useEffect(() => {
    return () => {
      const rest = () => {
        dispatch({ type: 'RESET_FORM' });
        organizationDispatch({ type: 'RESET_ORGANIZATION' });
      };
      rest();
    };
  }, [dispatch, organizationDispatch]);

  return (
    <div className="organization-container">
      {selector.isShowWelcomeForm && <NewOrganizationWelcome />}
      {!selector.isShowWelcomeForm &&
        !selector.isShowConfirmation &&
        !selector.isShowSuccess && <NewOrganizationForm />}
      {selector.isShowConfirmation && <NewOrganizationConfirmation />}
      {selector.isShowSuccess && <NewOrganizationSucces />}
    </div>
  );
};

export default NewOrganization;
