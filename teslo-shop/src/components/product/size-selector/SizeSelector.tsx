import clsx from "clsx";
import type { Size } from "@/interfaces";

interface Props {
  selectedSize: Size | null;
  availableSizes: Size[];

  onSizeChange: (size: Size) => void
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChange }: Props) => {
  return (
    <div className="my-5">
      <h4>Tallas disponibles</h4>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            type="button"
            key={size}
            onClick={() => onSizeChange(size)}
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
