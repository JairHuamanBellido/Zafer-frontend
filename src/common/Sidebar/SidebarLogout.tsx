import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UserActions } from '../../store/actions/user.action';

const SidebarLogout: React.FC = () => {
  const dispatch = useDispatch<Dispatch<UserActions>>();

  const [isLogout, setLogout] = useState<boolean>(false);
  const logout = (): void => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
    setLogout(true);
  };

  if (!isLogout) {
    return (
      <div className="sidebar__logout" onClickCapture={logout}>
        <p>Cerrar Sesión</p>
      </div>
    );
  }
  return <Redirect to="/login" />;
};

export default SidebarLogout;
