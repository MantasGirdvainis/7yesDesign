import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PaymentMethod from "../components/checkout/PaymentMethod";
import Button from "../components/common/Button";
import CheckboxField from "../components/common/CheckboxField"; // Import CheckboxField

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-8 p-6">
      {/* Left Column: Form, Shipping, Payment */}
      <div className="space-y-8">
        <CheckoutForm />
        <ShippingMethod />
        <div className="space-y-4">
          <PaymentMethod />

          {/* Privacy Policy Checkbox */}
          <div className="flex items-start space-x-2">
            <CheckboxField
              label={
                <span>
                  Your personal information will be used to process your order, to support
                  your experience on this site and for other purposes described in the{" "}
                  <a href="/privacy-policy" className="text-[#82b3a2] underline">
                    privacy policy
                  </a>
                  .
                </span>
              }
              id="privacy-checkbox" // Add unique ID for checkbox
            />
          </div>

          {/* Place Order Button */}
          <div className="mt-4">
            <Button text="Place an order" type="submit" />
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="lg:order-last order-first">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
