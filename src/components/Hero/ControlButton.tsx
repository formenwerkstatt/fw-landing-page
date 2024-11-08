import { cn } from "@/utils/cn";
export default function ControlButton({
  className,
  text,
  handleClick,
  children,
}: {
  className: string;
  text?: string;
  handleClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        " bg-primary  text-white opacity-30",
        "size-10 rounded-full text-xl ",
        "dark:bg-white dark:text-black",
        "transition-opacity duration-300 hover:opacity-100",
        `${className}`,
      )}
      onClick={handleClick}
    >
      {text ? text : children}
    </button>
  );
}
