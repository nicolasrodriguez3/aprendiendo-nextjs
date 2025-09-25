"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  maxQuantity?: number;
}

export const QuantitySelector = ({ quantity, maxQuantity }: Props) => {
  const [count, setCount] = useState(quantity);
  const [error, setError] = useState("");

  const onQuantityChange = (value: number) => {
    if (error) {
      setError("");
      setCount(maxQuantity ? maxQuantity : 1);
    }
    if (count + value < 1) return;
    if (maxQuantity && count + value > maxQuantity) return;

    setCount(count + value);
  };

  const onQuantityChangeManually = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const value = e.target.value;

    if (value === "") {
      setCount(0);
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

    setCount(number);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className={clsx("", {
            "cursor-not-allowed": count === 1,
            "cursor-pointer": count > 1,
          })}
          onClick={() => onQuantityChange(-1)}
        >
          <IoRemoveCircleOutline size={24} />
        </button>
        <input
          className="w-20 px-4 py-1 bg-gray-100 dark:bg-gray-100/10 text-center text-lg rounded"
          value={count}
          onChange={onQuantityChangeManually}
        />
        <button type="button" onClick={() => onQuantityChange(1)}>
          <IoAddCircleOutline size={24} />
        </button>
      </div>
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
};
