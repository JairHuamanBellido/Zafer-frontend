import React, { useState, useEffect } from 'react';
import { User } from '../../api/models/User';
import userService from '../../api/service/user.service';

const HeaderBarAvatar: React.FC = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    userService.getPersonalInformation().then((e) => {
      setUser(e);
    });
  }, []);
  return (
    <div className="headerbar__avatar">
      <img src={user?.avatar} width={28} height={28} alt="profile" />
      <p> {user?.name}</p>
    </div>
  );
};

export default HeaderBarAvatar;
