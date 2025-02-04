import { Order } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

export default function OrderHistory({ orders }: { orders: Order[] }) {
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);

  const orderTotal = (order: Order) => {
    return order.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  };

  const toggleOrder = (orderId: string) => {
    setExpandedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId],
    );
  };

  return (
    <section className="container mx-auto mb-24 px-4">
      <h2 className="mb-6 text-2xl font-semibold">Order History</h2>

      <div className="grid gap-4">
        {orders.length === 0 && (
          <div className="rounded-lg bg-gray-50 py-8 text-center">
            <p className="text-gray-500">No orders yet</p>
          </div>
        )}

        {orders.map((order) => {
          const isExpanded = expandedOrders.includes(order.id);
          return (
            <div
              key={order.id}
              className={cn(
                "rounded-lg bg-white shadow-md transition-all duration-200",
                "dark:bg-gray-800",
                "hover:shadow-lg",
              )}
            >
              <div
                onClick={() => {
                  toggleOrder(order.id);
                }}
                className="cursor-pointer p-4"
              >
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <p className="text-sm text-gray-500">{order.createdAt}</p>
                      <p className="line-clamp-1 font-medium">
                        {order.items.map((item) => item.name).join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <p className="font-semibold">
                      {orderTotal(order).toFixed(2)} €
                    </p>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-gray-100 dark:border-gray-700">
                  <div className="space-y-4 p-4">
                    {order.items.map((product) => (
                      <div
                        key={product.productId}
                        className="flex items-center gap-4"
                      >
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={product.imgUrl}
                            alt={product.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-1 font-medium">
                            {product.name}
                          </h3>
                          <div className="mt-1 flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                              Quantity: {product.quantity}
                            </p>
                            <p className="font-medium">
                              {product.price.toFixed(2)} €
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
