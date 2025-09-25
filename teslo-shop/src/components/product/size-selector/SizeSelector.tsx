import clsx from "clsx";
import type { Size } from "@/interfaces";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h4>Tallas disponibles</h4>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            type="button"
            key={size}
            className={clsx("mx-2 hover:underline text-lg", {
              "underline font-bold": size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
