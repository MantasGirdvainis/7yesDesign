import React from "react";

interface CheckboxFieldProps {
  label: string | React.ReactNode;
  id: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, id }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="w-3 h-3 accent-primary"
      />
      <label htmlFor={id} className="ml-2 text-xs text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
