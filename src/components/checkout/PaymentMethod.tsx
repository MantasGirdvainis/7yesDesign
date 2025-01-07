import React from "react";
import RadioField from "../common/RadioField"; // Import RadioField component

const PaymentMethod: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <span className="text-xs font-medium uppercase text-gray-500">3. </span>
      <h2 className="text-xs font-medium uppercase text-gray-500 tracking-wider border-b-2 border-gray-300 inline-block pb-1 mb-4">
        PAYMENT METHOD
      </h2>
      <div className="flex flex-col space-y-4">
        <RadioField
          id="credit-card"
          name="payment"
          label={
            <div className="flex justify-between w-full">
              <div>
                <span className="font-medium text-gray-900">Credit Card</span>
                <p className="text-sm text-gray-500">Mastercard, Maestro, American Express, Visa are accepted</p>
              </div>
            </div>
          }
        />
        <RadioField
          id="cash-on-delivery"
          name="payment"
          label={
            <div className="flex justify-between w-full">
              <div>
                <span className="font-medium text-gray-900">Cash on Delivery</span>
                <p className="text-sm text-gray-500">Pay with cash upon the delivery</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
