import React, { useState } from 'react';
import Input from '../Input/Input';

const HeaderBarSearch: React.FC = () => {
  const [text, setText] = useState<string>('');
  const s = (value: string): void => {
    setText(value);
  };
  return (
    <div className="headerbar__search">
      <Input placeholder="Estas buscando algo...?" setValue={s} value={text} />
    </div>
  );
};

export default HeaderBarSearch;
