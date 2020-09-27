import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SkeletonAvatar: React.FC = () => {
  return (
    <div className="headerbar__avatar">
      <div className="headerbar__avatar-copy-img" />
      <div className="headerbar__avatar-copy-name" />
    </div>
  );
};

const HeaderBarAvatar: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  if (user.name) {
    return (
      <div className="headerbar__avatar">
        <img src={user.avatar} alt="profile" />
        <p> {user.name}</p>
      </div>
    );
  }
  return <SkeletonAvatar />;
};

export default HeaderBarAvatar;
