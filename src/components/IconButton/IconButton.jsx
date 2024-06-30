import React, { useState } from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const IconButton = () => {
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
        flex justify-center items-center  w-70px h-16 
        ${isActive ? 'active' : ''}
      `}
    >
      {isActive ? <MicOffIcon sx={{ color: '#fcd34d' }} /> : <MicIcon />}
    </BaseButton>
  );
};

export default IconButton;
