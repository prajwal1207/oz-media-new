import React from "react";

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-white font-roboto text-sm mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`w-full bg-transparent border rounded-lg border-gray-200/60 p-2 text-white placeholder-[#fd4360] focus:outline-none focus:border-[#fd4360] ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
