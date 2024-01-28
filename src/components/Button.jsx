/* eslint-disable react/prop-types */
import React from 'react';
import { Slot } from '@radix-ui/react-slot';

// Define button variants as an object with styles
const buttonVariants = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  orange: "bg-orange-50 text-white hover:bg-orange-55",
  green: "border-green-50 bg-green-50 text-white  hover:bg-green-800",
  destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
  outline: "border border-input  bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  xlg: "h-12 text-lg rounded-md px-8",
  icon: "h-9 w-9",
};

// Base styles for the button
const baseStyles = `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`;

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  const combinedClassName = `${baseStyles} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;
  return (
    <Comp
      ref={ref} // Pass the ref to the underlying component
      className={combinedClassName}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };