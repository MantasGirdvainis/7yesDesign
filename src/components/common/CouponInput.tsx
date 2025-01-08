import React from "react";

interface CouponInputProps {
  /** Placeholder text for the coupon input field (default: "COUPON CODE") */
  placeholder?: string;
  /** Text displayed on the apply button */
  buttonText: string;
  /** Callback function triggered when the apply button is clicked */
  onApply: (coupon: string) => void;
}

/**
 * @component CouponInput
 * @description A reusable input component for entering and applying coupon codes.
 *
 * @props
 * - `placeholder` (string | optional): Placeholder text for the input field (default: "COUPON CODE").
 * - `buttonText` (string): Text displayed on the apply button.
 * - `onApply` (function): A callback function invoked with the entered coupon code when the apply button is clicked.
 *
 * @usage
 * <CouponInput
 *   placeholder="Enter your coupon code"
 *   buttonText="Apply"
 *   onApply={(code) => console.log("Coupon applied:", code)}
 * />
 */
const CouponInput: React.FC<CouponInputProps> = ({
  placeholder = "COUPON CODE",
  buttonText,
  onApply,
}) => {
  const [coupon, setCoupon] = React.useState("");

  /**
   * Handles the apply button click event.
   * Trims the coupon code and invokes the `onApply` callback if the input is not empty.
   */
  const handleApply = () => {
    if (coupon.trim()) {
      onApply(coupon.trim());
    }
  };

  return (
    <div className="flex items-center border border-dashed rounded-2xl p-2 w-full sm:w-4/5 md:w-3/4">
      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="flex-1 bg-transparent px-4 py-2 text-xs text-gray-500 focus:outline-none"
      />

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="bg-gray-200 px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-300 focus:outline-none transition-all duration-150 active:bg-gray-400 active:scale-95"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CouponInput;
