import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  OrganizationActions,
  OrganizationFormActions,
} from '../../store/actions/organization.action';
import { OrganizationState } from '../../store/reducer/organization.reducer';
import { RootState } from '../../store/store';

type S = RootState;
const parse = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month
    .toString()
    .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

const OrganizationFormGeneral: React.FC = () => {
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();
  const showMembersForm = () => {
    dispatch({ type: 'SHOW_MEMBERS_REGISTER', payload: true });
  };

  return (
    <div className="organization-container__form-general">
      <div className="field">
        <OrganizationNameInput />
      </div>
      <div className="field">
        <OrganizationDateFoundationInput />
        <OrganizationEmailInput />
      </div>
      <div className="btn-container">
        <button type="button" onClick={showMembersForm}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

const OrganizationNameInput: React.FC = () => {
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const { name } = useSelector<S, S['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;
  const setName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    organizationDispatch({ type: 'ADD_NAME', payload: e.target.value });
  };

  return (
    <label className="large" htmlFor="name-organization">
      <span> Nombre de la organización </span>
      <input
        value={name}
        onChange={setName}
        placeholder="Ingrese el nombre de su organización"
        type="text"
        id="name-organization"
        name="name-organization"
      />
    </label>
  );
};

const OrganizationDateFoundationInput: React.FC = () => {
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const organizationSelector = useSelector<S, S['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;
  const setDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const day = new Date(e.target.value);
    day.setDate(day.getDate() + 1);
    organizationDispatch({ type: 'ADD_DATE_FOUNDATION', payload: day });
  };
  useEffect(() => {
    if (organizationSelector.dateFoundation === undefined) {
      const day = new Date();
      day.setDate(day.getDate() + 1);
      organizationDispatch({ type: 'ADD_DATE_FOUNDATION', payload: day });
    }
  }, [organizationSelector.dateFoundation, organizationDispatch]);

  return (
    <label htmlFor="foundation-date">
      <span>Fecha de fundación</span>
      <input
        value={parse(organizationSelector.dateFoundation)}
        onChange={setDate}
        placeholder="Ingrese la fecha de fundación"
        id="foundation-date"
        name="foundation-date"
        type="date"
      />
    </label>
  );
};

const OrganizationEmailInput: React.FC = () => {
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const organizationSelector = useSelector<S, S['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    organizationDispatch({ type: 'ADD_EMAIL', payload: e.target.value });
  };
  return (
    <label htmlFor="organization-email">
      <span>Correo de la organización</span>
      <input
        value={organizationSelector.email}
        onChange={setEmail}
        placeholder="Ingrese su correo electrónico"
        id="organization-email"
        name="organization-email"
        type="email"
      />
    </label>
  );
};

export default OrganizationFormGeneral;
