import React from 'react';

const InputField = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-white font-roboto text-sm mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-transparent border border-border-gray p-2 text-white placeholder-primary-red focus:outline-none focus:border-primary-red ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;