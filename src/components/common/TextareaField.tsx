import React from "react";

interface TextareaFieldProps {
  label: string | React.ReactNode;
  placeholder?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="w-full mt-3">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        className="w-full text-xs p-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#82b3a2] focus:outline-none"
        placeholder={placeholder}
        rows={4}
      />
    </div>
  );
};

export default TextareaField;
