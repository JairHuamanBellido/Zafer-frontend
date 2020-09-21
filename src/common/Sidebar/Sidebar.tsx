import React from 'react';
import SidebarItems from './SidebarItems';
import SidebarLogout from './SidebarLogout';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h1>Nazer</h1>
      <SidebarItems />
      <SidebarLogout />
    </div>
  );
};

export default Sidebar;
