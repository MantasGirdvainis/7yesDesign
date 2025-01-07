import React from "react";
import TextInputField from "../common/TextInputField"; // Import TextInputField
import DropdownField from "../common/DropdownField"; // Import DropdownField
import TextareaField from "../common/TextareaField"; // Import TextareaField
import CheckboxField from "../common/CheckboxField"; // Import CheckboxField

const CheckoutForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h1 className="text-2xl font-medium mb-6">Checkout</h1>
      <span className="text-xs font-medium uppercase text-gray-500">1. </span>
      <h2 className="text-xs font-medium uppercase text-gray-500 tracking-wider border-b-2 border-gray-300 inline-block pb-1 mb-4">
        SHIPPING DETAILS
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextInputField label="First Name" placeholder="Your first name" />
        <TextInputField label="Last Name" placeholder="Your last name" />
      </div>

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

      {/* Country as a full-width input */}
      <div className="mb-4">
        <DropdownField
          label="Country"
          placeholder="Select a country"
          options={["United States", "Canada", "United Kingdom"]}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <DropdownField
          label="City"
          placeholder="Select a city"
          options={["New York", "Toronto", "London"]}
        />
        <TextInputField label="Zip Code" placeholder="XXX-XXXX" type="text" />
      </div>

      <TextInputField label="Address Line" placeholder="Street address" />
      <TextareaField
        label="Order Notes (Optional)"
        placeholder="Additional instructions"
      />

      {/* Billing Address Checkbox */}
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
