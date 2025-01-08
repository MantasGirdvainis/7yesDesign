import React from "react";

interface RadioFieldProps {
  /** The label displayed next to the radio button (can be a string or ReactNode) */
  label: string | React.ReactNode;
  /** The unique ID for the radio button */
  id: string;
  /** The name of the radio button group */
  name: string;
}

/**
 * @component RadioField
 * @description A reusable radio button component with a customizable label.
 *
 * @props
 * - `label` (string | React.ReactNode): The label displayed next to the radio button.
 * - `id` (string): The unique ID for the radio button.
 * - `name` (string): The name for the radio button group, ensuring mutual exclusivity within the group.
 *
 * @usage
 * <RadioField
 *   id="option1"
 *   name="group1"
 *   label="Option 1"
 * />
 */
const RadioField: React.FC<RadioFieldProps> = ({ label, id, name }) => {
  return (
    <div className="flex items-start gap-3">
      {/* Radio Button */}
      <input
        id={id}
        name={name}
        type="radio"
        className="peer appearance-none shrink-0 w-3 h-3 border-2 border-primaryLight rounded-full focus:outline-none focus:ring-2 focus:ring-primaryLight disabled:border-gray-400 mt-1"
      />

      {/* Label */}
      <label htmlFor={id} className="text-xs text-gray-700 leading-5 w-full">
        {label}
      </label>
    </div>
  );
};

export default RadioField;
