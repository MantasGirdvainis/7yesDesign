import React from "react";

interface ButtonProps {
  /** The text to be displayed on the button */
  text: string;
  /** Callback function to handle button click */
  onClick?: () => void;
  /** Button type: "button", "submit", or "reset" (default: "button") */
  type?: "button" | "submit" | "reset";
  /** Additional CSS classes for custom styling */
  className?: string;
}

/**
 * @component Button
 * @description A reusable button component with customizable text, type, and click handler.
 *
 * @props
 * - `text` (string): The text displayed on the button.
 * - `onClick` (function | optional): A callback function for handling button click events.
 * - `type` ("button" | "submit" | "reset" | optional): The HTML button type, defaulting to "button".
 * - `className` (string | optional): Additional Tailwind CSS classes for custom styling.
 *
 * @usage
 * <Button text="Click Me" onClick={handleClick} type="submit" className="custom-class" />
 */
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
      className={`bg-primary text-white px-7 py-3 rounded-xl text-base font-medium transition-all duration-150 active:bg-primaryDark active:scale-95 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
