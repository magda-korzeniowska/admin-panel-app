import React from 'react';

const Button = ({ color, bgColor, borderRadius, text, size, icon, bgHoverColor, width }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
