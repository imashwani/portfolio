import React from 'react';

const CodeIcon = ({ 
  width = 24, 
  height = 24, 
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
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
};

export default CodeIcon; 