export default function FormField({
  label,
  name,
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  options = [],
  rows = 5,
  className = "",
  error = "",
  required = false,
}) {
  const inputClasses = `
    mt-2
    w-full
    rounded-lg
    border
    ${error ? "border-red-400" : "border-neutral-300"}
    bg-white
    px-3.5
    py-2.5
    text-neutral-800
    placeholder:text-neutral-400
    outline-none
    transition
    duration-200
    ${
      error
        ? "focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
    }
    ${className}
  `;

  return (
    <div>
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>

      {/* Select */}
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`${inputClasses} cursor-pointer`}
        >
          <option value="">Select a Service</option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        /* Textarea */
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={inputClasses}
        />
      ) : (
        /* Input */
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}

      {error && (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
