import React from 'react';

const SkeletonSearchOrganization: React.FC = () => {
  return (
    <>
      <div className="organization-container__skeleton-search">
        <div className="img" />
        <div className="value" />
      </div>
      <div className="organization-container__skeleton-search">
        <div className="img" />
        <div className="value" />
      </div>
      <div className="organization-container__skeleton-search">
        <div className="img" />
        <div className="value" />
      </div>
    </>
  );
};

export default SkeletonSearchOrganization;
