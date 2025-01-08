import React from "react";

interface CheckboxFieldProps {
  /** The label to display next to the checkbox (can be a string or a ReactNode) */
  label: string | React.ReactNode;
  /** The unique ID for the checkbox, used for linking the label to the input */
  id: string;
}

/**
 * @component CheckboxField
 * @description A reusable checkbox field component with a label.
 *
 * @props
 * - `label` (string | React.ReactNode): The label displayed next to the checkbox.
 * - `id` (string): The unique ID for the checkbox, used to link the input and label.
 *
 * @usage
 * <CheckboxField id="accept-terms" label="I accept the terms and conditions" />
 */
const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, id }) => {
  return (
    <div className="flex items-center">
      {/* Checkbox Input */}
      <input id={id} type="checkbox" className="w-3 h-3 accent-primary" />
      {/* Label */}
      <label htmlFor={id} className="ml-2 text-xs text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
