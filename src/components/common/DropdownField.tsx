import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownFieldProps {
  /** The label displayed above the dropdown */
  label: string | React.ReactNode;
  /** The placeholder displayed as the default option */
  placeholder?: string;
  /** Array of options for the dropdown */
  options: string[];
}

/**
 * @component DropdownField
 * @description A reusable dropdown field component with a custom arrow icon.
 *
 * @props
 * - `label` (string | React.ReactNode): The label displayed above the dropdown.
 * - `placeholder` (string | optional): The placeholder text for the dropdown's default option.
 * - `options` (string[]): An array of options to display in the dropdown menu.
 *
 * @usage
 * <DropdownField
 *   label="Country"
 *   placeholder="Select a country"
 *   options={["United States", "Canada", "United Kingdom"]}
 * />
 */
const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  placeholder = "Select an option", // Default placeholder
  options,
}) => {
  return (
    <div className="w-full relative">
      {/* Label */}
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>

      {/* Dropdown */}
      <select className="w-full text-xs p-3 pl-4 pr-10 border text-gray-400 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none appearance-none">
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <div className="absolute right-5 top-11 transform -translate-y-1/2 pointer-events-none">
        <FiChevronDown size={16} className="text-gray-500" />
      </div>
    </div>
  );
};

export default DropdownField;
