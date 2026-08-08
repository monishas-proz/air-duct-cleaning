import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, className = "", ...props },
  ref
) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-700">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className={`
          w-full
          rounded-lg
          border
          border-neutral-300
          bg-white
          px-3.5
          py-2.5
          text-neutral-800
          outline-none
          transition
          duration-200
          placeholder:text-neutral-400
          focus:border-primary-600
          focus:ring-2
          focus:ring-primary-100
          ${className}
        `}
      />
    </div>
  );
});

export default Input;
