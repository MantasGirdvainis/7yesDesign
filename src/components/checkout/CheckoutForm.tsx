import React from "react";
import TextInputField from "../common/TextInputField";
import DropdownField from "../common/DropdownField";
import TextareaField from "../common/TextareaField";
import CheckboxField from "../common/CheckboxField";

/**
 * @component CheckoutForm
 * @description A form component to collect user shipping details during the checkout process.
 */
const CheckoutForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      {/* Header */}
      <h1 className="text-2xl font-medium mb-6">Checkout</h1>
      <span className="text-xs font-medium uppercase text-gray-500">1. </span>
      <h2 className="text-xs font-medium uppercase text-gray-500 tracking-wider border-b-2 border-gray-300 inline-block pb-1 mb-4">
        Shipping Details
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextInputField label="First Name" placeholder="Your first name" />
        <TextInputField label="Last Name" placeholder="Your last name" />
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextInputField
          label="Email"
          placeholder="Email address"
          type="email"
          icon="email"
        />
        <TextInputField
          label="Phone"
          placeholder="+1 ..."
          type="text"
          icon="phone"
        />
      </div>

      {/* Country Dropdown */}
      <div className="mb-4">
        <DropdownField
          label="Country"
          placeholder="Select a country"
          options={["United States", "Canada", "United Kingdom"]}
        />
      </div>

      {/* City and Zip Code */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <DropdownField
          label="City"
          placeholder="Select a city"
          options={["New York", "Toronto", "London"]}
        />
        <TextInputField label="Zip Code" placeholder="XXX-XXXX" type="text" />
      </div>

      {/* Address */}
      <TextInputField label="Address Line" placeholder="Street address" />

      {/* Order Notes */}
      <TextareaField
        label="Order Notes (Optional)"
        placeholder="Additional instructions"
      />

      {/* Billing Checkbox */}
      <div className="flex items-center mt-4">
        <CheckboxField
          id="billing-checkbox"
          label="Billing address same as delivery"
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
