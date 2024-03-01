/* eslint-disable react/prop-types */

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input  px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1  disabled:cursor-not-allowed disabled:opacity-50"
          ${className}`}
      {...props}
    />
  );
}
