import React from "react";
import RadioField from "../common/RadioField";

/**
 * @component ShippingMethod
 * @description A section of the checkout form that allows users to select their preferred shipping method.
 *
 * @usage
 * This component is used in the checkout process to provide shipping options, including
 * standard delivery, express shipping, and local pickup.
 */
const ShippingMethod: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      {/* Section Title */}
      <span className="text-xs font-medium uppercase text-gray-500">2. </span>
      <h2 className="text-xs font-medium uppercase text-gray-500 tracking-wider border-b-2 border-gray-300 inline-block pb-1 mb-4">
        Shipping Method
      </h2>

      {/* Shipping Options */}
      <div className="space-y-4">
        <RadioField
          id="standard-delivery"
          name="shipping"
          label={
            <div className="flex justify-between w-full">
              <div>
                <span className="font-medium text-gray-900">
                  Standard Delivery
                </span>
                <p className="text-sm text-gray-500">
                  Delivery in 5 - 8 working days
                </p>
              </div>
              <span className="font-semibold">$8.00</span>
            </div>
          }
        />
        <RadioField
          id="express-shipping"
          name="shipping"
          label={
            <div className="flex justify-between w-full">
              <div>
                <span className="font-medium text-gray-900">
                  Express Shipping
                </span>
                <p className="text-sm text-gray-500">
                  Delivery in 3 - 5 working days
                </p>
              </div>
              <span className="font-semibold">$15.00</span>
            </div>
          }
        />
        <RadioField
          id="local-pickup"
          name="shipping"
          label={
            <div className="flex justify-between w-full">
              <div>
                <span className="font-medium text-gray-900">Local Pickup</span>
                <p className="text-sm text-gray-500">
                  Delivery in 1 - 2 working days
                </p>
              </div>
              <span className="font-semibold">Free</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ShippingMethod;
