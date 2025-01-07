import React from "react";

interface CouponInputProps {
  placeholder?: string;
  buttonText: string;
  onApply: (coupon: string) => void;
}

const CouponInput: React.FC<CouponInputProps> = ({
  placeholder = "COUPON CODE",
  buttonText,
  onApply,
}) => {
  const [coupon, setCoupon] = React.useState("");

  const handleApply = () => {
    if (coupon.trim()) {
      onApply(coupon);
    }
  };

  return (
    <div className="flex items-center border border-dashed rounded-2xl p-2 w-full sm:w-4/5 md:w-3/4">
      <input
        type="text"
        placeholder={placeholder}
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="flex-1 bg-transparent px-4 py-2 text-xs text-gray-500 focus:outline-none"
      />
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
