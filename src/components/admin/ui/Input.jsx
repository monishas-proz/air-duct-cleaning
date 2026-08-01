import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, className = "", ...props },
  ref
) {
  return (
    <div className="space-y-2">
      <label className="text-sm  font-medium text-neutral-700">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className={`
          w-full
          rounded-xl
          border
          border-neutral-300
          bg-white
          px-4
          py-3
          text-neutral-800
          outline-none
          transition-all
          duration-200
          placeholder:text-neutral-400
          focus:border-primary-700
          focus:ring-4
          focus:ring-primary-100
          ${className}
        `}
      />
    </div>
  );
});

export default Input;