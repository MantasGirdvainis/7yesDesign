import React from "react";

interface RadioFieldProps {
  label: string | React.ReactNode;
  id: string;
  name: string;
}

const RadioField: React.FC<RadioFieldProps> = ({ label, id, name }) => {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        name={name}
        type="radio"
        className="peer appearance-none shrink-0 w-3 h-3 border-2 border-primaryLight rounded-full focus:outline-none focus:ring-2 focus:ring-primaryLight disabled:border-gray-400 mt-1"
      />
      <label
        htmlFor={id}
        className="text-xs text-gray-700 leading-5 w-full"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioField;
