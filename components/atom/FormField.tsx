import React from "react";
import clsx from "clsx";

type FormFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  as?: "input" | "textarea";
  defaultValue?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  error,
  disabled = false,
  as = "input",
  defaultValue,
}) => {
  const id = `field-${name}`;
  const Component = as;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <Component
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          "rounded-lg border px-3 py-2 text-sm transition",
          "focus:outline-none focus:ring-2",
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300",
          disabled && "cursor-not-allowed bg-gray-100 opacity-70",
          as === "textarea" && "min-h-[100px] resize-y"
        )}
      />

      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
