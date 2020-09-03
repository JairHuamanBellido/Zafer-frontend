import React, { useState } from 'react';

const RegisterInputPhoto: React.FC = () => {
  const [img, setImg] = useState<string>('');

  const handlePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const picture = e.target.files[0];
      setImg(URL.createObjectURL(picture));
    }
  };

  return (
    <div className="photo-submit">
      <img width={96} height={96} src={img} alt="foto" />
      <div className="photo-input">
        <input type="file" name="myImage" onChange={handlePicture} />
        <button type="button">Subir foto</button>
      </div>
    </div>
  );
};

export default RegisterInputPhoto;
