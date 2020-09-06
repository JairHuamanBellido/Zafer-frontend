import React, { useState, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '../../assets/img/avatar-default.png';
import { RegisterUserActions } from '../../store/actions/registerUser.action';

const RegisterInputPhoto: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();

  const [img, setImg] = useState<string>(Avatar);

  const handlePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const picture = e.target.files[0];
      dispatch({ type: 'ADD_IMAGE', payload: picture });
      setImg(URL.createObjectURL(picture));
    }
  };

  return (
    <div className="photo-submit">
      <img width={96} height={96} src={img} alt="foto" />
      <div className="photo-input">
        <input
          required={true}
          type="file"
          name="myImage"
          onChange={handlePicture}
        />
        <button type="button">Subir foto</button>
      </div>
    </div>
  );
};

export default RegisterInputPhoto;
