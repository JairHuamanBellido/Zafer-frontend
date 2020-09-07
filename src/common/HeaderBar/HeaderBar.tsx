import React from 'react';
import HeaderBarSearch from './HeaderBarSearch';
import HeaderBarAvatar from './HeaderBarAvatar';

const HeaderBar: React.FC = () => {
  return (
    <div className="headerbar">
      <HeaderBarSearch />
      <HeaderBarAvatar />
    </div>
  );
};

export default HeaderBar;
