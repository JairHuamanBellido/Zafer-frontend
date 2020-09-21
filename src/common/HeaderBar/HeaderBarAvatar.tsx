import React from 'react';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/reducer/user.reducer';
import { RootState } from '../../store/store';

type S = RootState;

const SkeletonAvatar: React.FC = () => {
  return (
    <div className="headerbar__avatar">
      <div className="headerbar__avatar-copy-img" />
      <div className="headerbar__avatar-copy-name" />
    </div>
  );
};

const HeaderBarAvatar: React.FC = () => {
  const selector = useSelector<S, S['userReducer']>(
    (state) => state.userReducer,
  ) as UserState;

  if (selector.user.name) {
    return (
      <div className="headerbar__avatar">
        <img src={selector.user.avatar} alt="profile" />
        <p> {selector.user.name}</p>
      </div>
    );
  }
  return <SkeletonAvatar />;
};

export default HeaderBarAvatar;
