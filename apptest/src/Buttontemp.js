import React, { useState } from 'react';

function Button({type='button', children, ...rest}) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
  
    };
  
    return (
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
  
        style={{
          backgroundImage: isHovered ? './images/google.png' : 'none',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          cursor: isHovered ? 'pointer' : 'auto',
          transition: 'all 0.2s ease-in-out',
        }}

        type={type} {...rest}
      >
        {children}
      </button>
    );
  }
export default Button;