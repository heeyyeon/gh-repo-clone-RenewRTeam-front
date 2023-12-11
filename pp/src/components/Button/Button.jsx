import React from 'react';
import './Button.css';

const Button = ({ text, color, backgroundColor, borderColor, onClick }) => {
  const buttonStyle = {
    color: color,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  };

  return (
    <button className="button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;