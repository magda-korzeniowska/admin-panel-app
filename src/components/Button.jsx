import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ color, bgColor, borderRadius, text, size, icon, bgHoverColor, width }) => {
  const { handleClick } = useStateContext();
  return (
    <button
      type='button'
      onClick={() => handleClick()}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
