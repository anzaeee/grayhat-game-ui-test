import React, { useState } from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon from MUI
import './styles.css'; // Import hover states CSS if needed

const Button = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <BaseButton
      onClick={handleClick}
      className={`
        button
        bg-amber-300 border border-gray-200 p-4 transition-transform
        flex justify-center items-center w-full h-16 text-align-center
        ${isActive ? 'active' : ''}
      `}
    >
      <span className='font-semibold'>Online &nbsp;
      {children}
      </span>
    </BaseButton>
  );
};

const KebabButton = () => {
  return (
    <BaseButton
      className={`
        kebab-button
        bg-amber-300 border border-gray-200 p-4 transition-transform
        flex justify-center items-center w-70px h-16 
        hover:bg-slate-300
      `}
    >
     <MoreVertIcon />
    </BaseButton>
  );
};

export { Button, KebabButton };

