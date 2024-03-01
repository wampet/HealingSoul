/* eslint-disable react/display-name */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Input = React.forwardRef(({ className, label, id, name, type, required, ...props }, ref) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-xs font-normal leading-6 text-inputLabel">
          {label}
        </label>
      )}
      <div >
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          required={required}
          className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1  disabled:cursor-not-allowed disabled:opacity-50 ${
            className || ""
          }`}
          {...props}
        />
      </div>
    </div>
  );
});

export default Input;
