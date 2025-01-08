import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PaymentMethod from "../components/checkout/PaymentMethod";
import Button from "../components/common/Button";
import CheckboxField from "../components/common/CheckboxField";

/**
 * @component CheckoutPage
 * @description The main page for the checkout process, displaying forms, shipping and payment options, and an order summary.
 *
 * @features
 * - Includes a checkout form, shipping method, payment method, and an order summary.
 * - Allows users to agree to a privacy policy and place an order.
 *
 * @usage
 * <CheckoutPage />
 */
const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-8 p-6">
      {/* Left Column: Form, Shipping, and Payment */}
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
                  Your personal information will be used to process your order,
                  to support your experience on this site and for other purposes
                  described in the{" "}
                  <a
                    href="/privacy-policy"
                    className="text-primaryLight underline"
                  >
                    privacy policy
                  </a>
                  .
                </span>
              }
              id="privacy-checkbox"
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
