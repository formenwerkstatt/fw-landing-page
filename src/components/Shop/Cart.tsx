import { useUser } from "@/app/providers";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Cart() {
  const { user } = useUser();

  return (
    <Link
      className={cn(
        "w-full bg-primary text-white ",
        `flex rounded-lg p-2 text-xl lg:mr-0 lg:inline-flex lg:px-2 lg:py-6`,
      )}
      href="/shop/checkout"
    >
      CART: {user?.cart.length}
    </Link>
  );
}
