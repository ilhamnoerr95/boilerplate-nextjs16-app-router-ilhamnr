import React from "react";
import clsx from "clsx";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  as?: "input" | "textarea";
  label?: string;
  id?: string;
  ariaLabel?: string;
  className?: string;
}

const InputCustom: React.FC<IProps> = ({
  id,
  ariaLabel,
  label,
  placeholder = "Placeholder ...",
  type = "text",
  onChange,
  value,
  as = "input",
  className,
}) => {
  const Component = as;

  return (
    <div className="flex flex-col gap-2">
      {label && id && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}

      <Component
        aria-label={ariaLabel}
        id={id}
        placeholder={placeholder}
        type={as === "input" ? type : undefined}
        onChange={onChange}
        value={value}
        className={clsx(
          "border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300",
          className
        )}
      />
    </div>
  );
};

export default InputCustom;
