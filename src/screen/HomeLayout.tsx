import React from 'react';
import Sidebar from '../common/Sidebar/Sidebar';
import HeaderBar from '../common/HeaderBar/HeaderBar';
import HomeRouter from './HomeRouter';

const HomeLayoutScreen: React.FC = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div>
        <HeaderBar />
        <HomeRouter />
      </div>
    </div>
  );
};
export default HomeLayoutScreen;
