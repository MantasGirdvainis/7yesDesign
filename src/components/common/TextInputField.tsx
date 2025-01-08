import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

interface TextInputFieldProps {
  /** The label displayed above the input field */
  label: string | React.ReactNode;
  /** Placeholder text for the input field (optional) */
  placeholder?: string;
  /** Type of input: "text" or "email" (default: "text") */
  type?: "text" | "email";
  /** Icon type to display: "email" or "phone" (optional) */
  icon?: "email" | "phone";
}

/**
 * @component TextInputField
 * @description A reusable text input field component with optional icons.
 * 
 * @props
 * - `label` (string | React.ReactNode): The label displayed above the input field.
 * - `placeholder` (string | optional): Placeholder text displayed inside the input field.
 * - `type` ("text" | "email" | optional): Specifies the type of the input field. Defaults to "text".
 * - `icon` ("email" | "phone" | optional): Adds an icon inside the input field for visual clarity.
 * 
 * @usage
 * <TextInputField
 *   label="Email Address"
 *   placeholder="Enter your email"
 *   type="email"
 *   icon="email"
 * />
 */
const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  icon,
}) => {
  return (
    <div className="relative w-full">
      {/* Icon */}
      {icon && (
        <div className="absolute left-3 top-11 transform -translate-y-1/2 text-gray-400">
          {icon === "email" && <FiMail size={18} />}
          {icon === "phone" && <FiPhone size={18} />}
        </div>
      )}

      {/* Label */}
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>

      {/* Input Field */}
      <input
        className={`w-full ${icon ? "pl-10" : "pl-3"} p-3 text-xs border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primaryLight focus:outline-none`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputField;
