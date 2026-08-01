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
    body-md
    mt-2
    w-full
    rounded-md
    border
    ${error ? "border-red-500" : "border-neutral-200"}
    bg-white
    px-4
    py-3
    text-neutral-700
    placeholder:text-neutral-400
    outline-none
    transition-colors
    ${error ? "focus:border-red-500" : "focus:border-primary-700"}
    ${className}
  `;

  return (
    <div>
      {/* Label */}
      <label 
        htmlFor={name}
        className="caption font-semibold uppercase tracking-[0.08em] text-neutral-600">
        {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
      </label>

      {/* Select */}
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
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
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}