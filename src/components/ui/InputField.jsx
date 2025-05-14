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
        className={`w-full bg-transparent border border-gray-200/30 rounded-lg  p-2 text-white placeholder-[#fd4360]/70 focus:outline-none focus:border-[#fd4360] ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;