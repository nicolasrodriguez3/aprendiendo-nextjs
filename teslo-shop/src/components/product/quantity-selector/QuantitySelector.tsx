"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  maxQuantity?: number;

  onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector = ({
  quantity,
  maxQuantity,
  onQuantityChange,
}: Props) => {
  const [error, setError] = useState("");

  const onValueChange = (value: number) => {
    if (error) {
      setError("");
      onQuantityChange(maxQuantity ? maxQuantity : 1);
    }
    if (quantity + value < 1) return;
    if (maxQuantity && quantity + value > maxQuantity) return;

    onQuantityChange(quantity + value);
  };

  const onValueChangeManually = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const value = e.target.value;

    if (value === "") {
      onQuantityChange(0);
      return;
    }
    const number = Number(value);
    if (Number.isNaN(number)) {
      return;
    }
    if (maxQuantity && number > maxQuantity) {
      setError("Max quantity exceeded");
    }
    if (number < 1) {
      setError("Quantity must be greater than 0");
    }

    onQuantityChange(number);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className={quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}
          onClick={() => onValueChange(-1)}
        >
          <IoRemoveCircleOutline size={24} />
        </button>
        <input
          className="w-20 px-4 py-1 bg-gray-100 dark:bg-gray-100/10 text-center text-lg rounded"
          value={quantity}
          onChange={onValueChangeManually}
        />
        <button
          type="button"
          className={quantity === maxQuantity ? "cursor-not-allowed" : "cursor-pointer"}
         onClick={() => onValueChange(1)}
        >
          <IoAddCircleOutline size={24} />
        </button>
      </div>
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
};
