import React from 'react';

const CheckmarkIcon = ({ 
  width = 20, 
  height = 20, 
  strokeWidth = 2, 
  className = "", 
  ...props 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
};

export default CheckmarkIcon; 