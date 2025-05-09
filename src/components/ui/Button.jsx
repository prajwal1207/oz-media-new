import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-montserrat font-bold text-lg transition-colors duration-200 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary-red text-white hover:bg-primary-red-dark',
    outline: 'border border-primary-red text-primary-red hover:bg-primary-red hover:text-white',
    text: 'text-primary-red hover:underline'
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;