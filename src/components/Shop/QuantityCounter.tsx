import { cn } from "@/utils/cn";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

type QuantityCounterProps = {
  setQuantity: (quantity: number) => void;
  quantity: number;
  isUpdating: boolean;
  small?: boolean;
};

export default function QuantityCounter({
  setQuantity,
  quantity,
  isUpdating,
  small,
}: QuantityCounterProps) {
  
  function validateInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/[^\d]/g, "");
    const newQuantity = value ? parseInt(value, 10) : 1;
    setQuantity(Math.max(1, newQuantity));
  }

  return (
    <div className="flex items-center">
      <button
        className={cn(
          "rounded-l-lg bg-primary p-2  text-white hover:bg-blue-600",
          isUpdating && "bg-gray-200",
          small && " text-xs",
        )}
        onClick={() => setQuantity(Math.max(0, quantity - 1))}
        disabled={isUpdating}
      >
        <FaMinus />
      </button>
      <input
        type="text"
        inputMode="numeric"
        className={cn(
          "rounded-none border border-gray-300 text-center",
          isUpdating && "bg-gray-200  text-gray-300",
          small ? "w-12 text-lg " : "w-16 text-xl",
        )}
        disabled={isUpdating}
        value={quantity}
        onChange={validateInput}
        min="1"
      />
      <button
        className={cn(
          "rounded-r-lg bg-primary p-2  text-white hover:bg-blue-600",
          isUpdating && "bg-gray-200",
          small && " text-xs",
        )}
        onClick={() => setQuantity(quantity + 1)}
        disabled={isUpdating}
      >
        <FaPlus />
      </button>
    </div>
  );
}
