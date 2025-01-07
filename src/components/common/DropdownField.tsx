import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownFieldProps {
  label: string | React.ReactNode;
  placeholder?: string;
  options: string[];
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  placeholder,
  options,
}) => {
  return (
    <div className="w-full relative">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        className="w-full text-xs p-3 pl-4 pr-10 border text-gray-400 border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#82b3a2] focus:outline-none appearance-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Custom Arrow */}
      <div className="absolute right-5 top-10 transform -translate-y-1/2 pointer-events-none">
      <FiChevronDown size={16} className="text-gray-500" />
      </div>
    </div>
  );
};

export default DropdownField;
