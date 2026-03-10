import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  name?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  loadingName?: string;
  onClick?: () => void;
  bgColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  name = "btn-custom",
  type = "button",
  loadingName = "in progress...",
  disabled = false,
  isLoading = false,
  onClick,
  bgColor = "#007bff",
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={{ backgroundColor: isDisabled ? "#9298A1" : bgColor }}
      className={clsx("btn", "btn-primary", "px-8", "py-4", "rounded-[10px]", "cursor-pointer", {
        "cursor-not-allowed opacity-70": isDisabled,
      })}
    >
      {isLoading ? loadingName : label}
    </button>
  );
};

export default Button;
