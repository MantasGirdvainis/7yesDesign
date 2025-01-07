import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#448c74] text-white px-7 py-3 rounded-xl text-base font-medium transition-all duration-150 active:bg-[#357b5d] active:scale-95 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;