/* eslint-disable react/prop-types */
const InputField = ({
    label,
    id,
    type,
    placeholder,
    name,
    register,
    errors,
  }) => {
    return (
      <div className="mb-4">
        <label
          className="block text-gray-heading text-sm font-medium mb-2"
          htmlFor={id}
        >
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 min-h-[80px] disabled:cursor-not-allowed disabled:opacity-50"
            id={id}
            placeholder={placeholder}
            name={name}
            {...register(name)}
          ></textarea>
        ) : (
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            {...register(name)}
          />
        )}
        {errors[name] && (
          <p className="text-red-500 text-xs italic">{errors[name].message}</p>
        )}
      </div>
    );
  };

export default InputField
