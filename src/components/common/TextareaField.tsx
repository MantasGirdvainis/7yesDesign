import React from "react";

interface TextareaFieldProps {
  /** The label displayed above the textarea */
  label: string | React.ReactNode;
  /** Placeholder text for the textarea (optional) */
  placeholder?: string;
}

/**
 * @component TextareaField
 * @description A reusable textarea field component with a label and placeholder.
 *
 * @props
 * - `label` (string | React.ReactNode): The label displayed above the textarea.
 * - `placeholder` (string | optional): The placeholder text displayed inside the textarea.
 *
 * @usage
 * <TextareaField
 *   label="Additional Notes"
 *   placeholder="Enter your notes here..."
 * />
 */
const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder,
}) => {
  return (
    <div className="w-full mt-3">
      {/* Label */}
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>

      {/* Textarea */}
      <textarea
        className="w-full text-xs p-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primaryLight focus:outline-none"
        placeholder={placeholder}
        rows={4}
      />
    </div>
  );
};

export default TextareaField;
