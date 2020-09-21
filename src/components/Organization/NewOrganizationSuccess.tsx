import React from 'react';

const NewOrganizationSucces: React.FC = () => {
  return (
    <div className="organization-container__success">
      <h1>Enhorabuena</h1>
      <p>Su organización se ha creado con éxito</p>
      <a href="/home">Ir al inicio</a>
    </div>
  );
};

export default NewOrganizationSucces;
