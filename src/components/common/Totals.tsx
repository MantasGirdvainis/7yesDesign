import React from "react";

interface TotalsProps {
  /** The subtotal amount */
  subtotal: number;
  /** The taxes amount */
  taxes: number;
  /** The shipping cost */
  shipping: number;
}

/**
 * @component Totals
 * @description A component that displays the order summary, including subtotal, taxes, shipping cost, and the total amount.
 *
 * @props
 * - `subtotal` (number): The subtotal amount for the order.
 * - `taxes` (number): The calculated taxes for the order.
 * - `shipping` (number): The shipping cost for the order.
 *
 * @usage
 * <Totals
 *   subtotal={92.00}
 *   taxes={8.00}
 *   shipping={15.00}
 * />
 */
const Totals: React.FC<TotalsProps> = ({ subtotal, taxes, shipping }) => {
  const total = subtotal + taxes + shipping;

  return (
    <div className="mt-6">
      {/* Subtotal */}
      <div className="flex justify-between text-sm text-gray-500">
        <p>Subtotal:</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>

      {/* Taxes */}
      <div className="flex justify-between text-sm text-gray-500">
        <p>Taxes:</p>
        <p>${taxes.toFixed(2)}</p>
      </div>

      {/* Shipping Cost */}
      <div className="flex justify-between text-sm text-gray-500">
        <p>Shipping Cost:</p>
        <p>${shipping.toFixed(2)}</p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-divider" />

      {/* Total */}
      <div className="mt-4 flex justify-between">
        <p className="text-base text-gray-500">Total:</p>
        <p className="text-2xl font-medium">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Totals;
