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
}) {
  const inputClasses = `
    body-md
    mt-2
    w-full
    rounded-md
    border
    border-neutral-200
    bg-white
    px-4
    py-3
    text-neutral-700
    placeholder:text-neutral-400
    outline-none
    transition-colors
    focus:border-primary-700
    ${className}
  `;

  return (
    <div>
      {/* Label */}
      <label className="caption font-semibold uppercase tracking-[0.08em] text-neutral-600">
        {label}
      </label>

      {/* Select */}
      {type === "select" ? (
        <select
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
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}