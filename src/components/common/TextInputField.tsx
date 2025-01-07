import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

interface TextInputFieldProps {
  label: string | React.ReactNode;
  placeholder?: string;
  type?: "text" | "email";
  icon?: "email" | "phone";
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  icon,
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-10 transform -translate-y-1/2 text-gray-400">
          {icon === "email" && <FiMail size={18} />}
          {icon === "phone" && <FiPhone size={18} />}
        </div>
      )}
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        className={`w-full ${icon ? "pl-10" : "pl-3"} p-3 text-xs border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#82b3a2] focus:outline-none`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputField;
