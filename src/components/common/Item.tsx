import React from "react";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";

interface ItemProps {
  image: string;
  title: string;
  color?: string;
  weight?: string;
  price: string;
  originalPrice?: string;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

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
      {/* Left: Image and details */}
      <div className="flex">
        <img
          src={image}
          alt={title}
          className="h-16 w-16 rounded-md object-cover"
        />
        <div className="ml-4">
          <p className="text-base font-medium">{title}</p>
          {color && weight ? <p className="text-xs">
            <span className="text-gray-500">Color:</span> <span className="font-semibold">{color}</span> | <span className="text-gray-500">Weight:</span> <span className="font-semibold">{weight}</span>
          </p> : '' }
          <div className="flex items-center mt-2 space-x-4">
            {/* Decrement Button */}
            <button
              className="hover:text-red-600"
              onClick={onDecrement}
              aria-label="Decrease quantity"
            >
              <FiMinus className="text-base" size={10}  />
            </button>

            {/* Quantity */}
            <p className="text-sm font-medium">{quantity}</p>

            {/* Increment Button */}
            <button
              className="hover:text-[#82b3a2]"
              onClick={onIncrement}
              aria-label="Increase quantity"
            >
              <FiPlus className="text-base" size={10} />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Price and actions */}
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
          <FiTrash className="text-base" />
        </button>
      </div>
    </li>
  );
};

export default Item;
