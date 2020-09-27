import React from 'react';
import HeaderBarSearch from './HeaderBarSearch';
import HeaderBarAvatar from './HeaderBarAvatar';
import HeaderBarButtons from './HeaderBarButtons';

const HeaderBar: React.FC = () => {
  return (
    <div className="headerbar">
      <HeaderBarSearch />
      <HeaderBarButtons />
      <HeaderBarAvatar />
    </div>
  );
};

export default HeaderBar;
