import React from "react";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";

interface ItemProps {
  /** URL of the item's image */
  image: string;
  /** Title or name of the item */
  title: string;
  /** (Optional) Color of the item */
  color?: string;
  /** (Optional) Weight of the item */
  weight?: string;
  /** Current price of the item */
  price: string;
  /** (Optional) Original price of the item (for discounts) */
  originalPrice?: string;
  /** Current quantity of the item */
  quantity: number;
  /** Function to handle quantity increment */
  onIncrement: () => void;
  /** Function to handle quantity decrement */
  onDecrement: () => void;
  /** Function to handle item removal */
  onRemove: () => void;
}

/**
 * @component Item
 * @description Represents a single item in a cart or order summary, with options to update quantity or remove the item.
 *
 * @props
 * - `image` (string): URL of the item's image.
 * - `title` (string): Name or title of the item.
 * - `color` (string | optional): Color of the item, if applicable.
 * - `weight` (string | optional): Weight of the item, if applicable.
 * - `price` (string): The current price of the item.
 * - `originalPrice` (string | optional): The original price of the item (useful for discounts).
 * - `quantity` (number): The current quantity of the item.
 * - `onIncrement` (function): Callback to increment the item's quantity.
 * - `onDecrement` (function): Callback to decrement the item's quantity.
 * - `onRemove` (function): Callback to remove the item.
 *
 * @usage
 * <Item
 *   image="https://via.placeholder.com/50"
 *   title="Example Item"
 *   color="Blue"
 *   weight="200g"
 *   price="$10.00"
 *   originalPrice="$15.00"
 *   quantity={1}
 *   onIncrement={() => console.log("Increment quantity")}
 *   onDecrement={() => console.log("Decrement quantity")}
 *   onRemove={() => console.log("Remove item")}
 * />
 */
const Item: React.FC<ItemProps> = ({
  image,
  title,
  color,
  weight,
  price,
  originalPrice,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <li className="flex justify-between py-4">
      {/* Left Section: Image and Details */}
      <div className="flex">
        <img
          src={image}
          alt={title}
          className="h-16 w-16 rounded-md object-cover"
        />
        <div className="ml-4">
          <p className="text-base font-medium">{title}</p>
          {color && weight && (
            <p className="text-xs text-gray-500">
              <span>Color:</span> <span className="font-semibold">{color}</span>{" "}
              | <span>Weight:</span>{" "}
              <span className="font-semibold">{weight}</span>
            </p>
          )}
          <div className="flex items-center mt-2 space-x-4">
            {/* Decrement Button */}
            <button
              className="hover:text-red-600"
              onClick={onDecrement}
              aria-label="Decrease quantity"
            >
              <FiMinus size={16} />
            </button>

            {/* Quantity Display */}
            <p className="text-sm font-medium">{quantity}</p>

            {/* Increment Button */}
            <button
              className="hover:text-primary"
              onClick={onIncrement}
              aria-label="Increase quantity"
            >
              <FiPlus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Price and Actions */}
      <div className="flex flex-col items-end">
        <p className="font-medium text-gray-500">{price}</p>
        {originalPrice && (
          <p className="text-sm text-gray-300 line-through">{originalPrice}</p>
        )}
        <button
          className="text-gray-400 mt-2 hover:text-red-600"
          onClick={onRemove}
          aria-label="Remove item"
        >
          <FiTrash size={16} />
        </button>
      </div>
    </li>
  );
};

export default Item;
