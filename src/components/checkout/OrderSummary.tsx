import React from "react";
import Item from "../common/Item";
import CouponInput from "../common/CouponInput";
import Totals from "../common/Totals"; // Import Totals Component

const OrderSummary: React.FC = () => {
  const handleIncrement = (item: string) => {
    console.log(`Increment quantity for ${item}`);
  };

  const handleDecrement = (item: string) => {
    console.log(`Decrement quantity for ${item}`);
  };

  const handleRemove = (item: string) => {
    console.log(`Remove ${item} from the order`);
  };

  const handleCuponInput = (item: string) => {
    console.log(`Added ${item} cupon`);
  };

  // Example prices
  const subtotal = 92.00;
  const taxes = 8.00;
  const shipping = 15.00;

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-medium mb-6">
        Order Summary <span className="text-gray-500 text-sm">(4 items)</span>
      </h2>

      <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
        <Item
          image="https://via.placeholder.com/50"
          title="Candle in concrete bowl"
          color="Gray night"
          weight="140g"
          price="$11.00"
          originalPrice="$15.00"
          quantity={2}
          onIncrement={() => handleIncrement("Candle in concrete bowl")}
          onDecrement={() => handleDecrement("Candle in concrete bowl")}
          onRemove={() => handleRemove("Candle in concrete bowl")}
        />
        <Item
          image="https://via.placeholder.com/50"
          title="Exquisite glass vase"
          price="$23.00"
          quantity={1}
          onIncrement={() => handleIncrement("Exquisite glass vase")}
          onDecrement={() => handleDecrement("Exquisite glass vase")}
          onRemove={() => handleRemove("Exquisite glass vase")}
        />
        <Item
          image="https://via.placeholder.com/50"
          title="Set for a dinner party of 7 items"
          price="$47.00"
          quantity={1}
          onIncrement={() => handleIncrement("Dinner set")}
          onDecrement={() => handleDecrement("Dinner set")}
          onRemove={() => handleRemove("Dinner set")}
        />
      </ul>

      {/* Coupon Input */}
      <div className="mt-6">
        <CouponInput
          buttonText="Apply coupon"
          onApply={() => handleCuponInput("WEAADD")}
        />
      </div>

      {/* Use the Totals Component */}
      <div className="mt-6">
        <Totals subtotal={subtotal} taxes={taxes} shipping={shipping} />
      </div>
    </div>
  );
};

export default OrderSummary;
