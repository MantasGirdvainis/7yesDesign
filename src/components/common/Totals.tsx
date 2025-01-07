import React from "react";

interface TotalsProps {
  subtotal: number;
  taxes: number;
  shipping: number;
}

const Totals: React.FC<TotalsProps> = ({ subtotal, taxes, shipping }) => {
  const total = subtotal + taxes + shipping;

  return (
    <div className="mt-6">
      <div className="flex justify-between text-sm text-gray-500">
        <p>Subtotal:</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <p>Taxes:</p>
        <p>${taxes.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <p>Shipping Cost:</p>
        <p>${shipping.toFixed(2)}</p>
      </div>

      {/* Add a divider line */}
      <div className="my-4 border-t border-gray-200" />

      <div className="mt-4 flex justify-between">
        <p className="text-base text-gray-500">Total:</p>
        <p className="text-2xl font-medium">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Totals;
