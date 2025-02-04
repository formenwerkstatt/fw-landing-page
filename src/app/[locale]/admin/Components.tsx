import { Product, Order, OrderStatus } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Check,
  XCircle,
  AlertCircle,
  Package,
  ShoppingCart,
  DollarSign,
  Users,
} from "lucide-react";

const ORDER_STATUS_FLOW: Record<OrderStatus, OrderStatus[]> = {
  pending: ["confirmed", "canceled"],
  confirmed: ["shipped", "canceled"],
  shipped: ["delivered", "canceled"],
  delivered: [],
  canceled: [],
};

interface ProductsViewProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (collection: string, id: string) => void;
}

export function ProductsView({
  products,
  onEdit,
  onDelete,
}: ProductsViewProps) {
  if (products.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-white">
        <p className="text-xl text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between rounded-lg bg-white p-6 shadow-md"
        >
          <div className="flex items-center gap-8">
            <div className="h-48 w-48 overflow-hidden rounded-lg">
              <Image
                src={product.imgUrl[0]}
                alt={product.name}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-48 flex-col justify-between">
              <h3 className="line-clamp-1 text-xl font-semibold">
                {product.name}
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Price: </span>€
                  {product.price.toFixed(2)}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Stock: </span>
                  {product.stock} units
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Created: </span>
                  {product.createdAt}
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-48 flex-col justify-between">
            <Link
              href={`/shop/product/${product.id}`}
              className="rounded-lg bg-gray-100 px-6 py-2 text-center font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              View
            </Link>
            <button
              onClick={() => onEdit(product)}
              className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete("products", product.id)}
              className="rounded-lg bg-red-500 px-6 py-2 font-medium text-white transition-colors hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

interface OrdersViewProps {
  orders: Order[];
  pendingUpdates: Record<string, OrderStatus>;
  onStatusChange: (orderId: string, status: OrderStatus) => void;
  onDelete: (collection: string, id: string) => void;
}

export function OrdersView({
  orders,
  pendingUpdates,
  onStatusChange,
  onDelete,
}: OrdersViewProps) {
  const getOrderStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="text-yellow-500" />;
      case "completed":
        return <Check className="text-green-500" />;
      case "cancelled":
        return <XCircle className="text-red-500" />;
      default:
        return <AlertCircle className="text-gray-500" />;
    }
  };

  const getOrderStatusClass = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const calculateOrderTotal = (order: Order) => {
    return order.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const STATUS_ORDER = [
    "pending",
    "confirmed",
    "shipped",
    "delivered",
    "canceled",
  ];

  const groupedOrders = orders.reduce(
    (grouped, order) => {
      if (!grouped[order.status]) {
        grouped[order.status] = [];
      }
      grouped[order.status].push(order);
      return grouped;
    },
    {} as Record<string, Order[]>,
  );

  Object.keys(groupedOrders).forEach((status) => {
    groupedOrders[status].sort(
      (a, b) => Number(b.createdAt) - Number(a.createdAt),
    );
  });

  if (orders.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-white">
        <p className="text-xl text-gray-500">No orders found</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-white">
        <p className="text-xl text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {STATUS_ORDER.map((status) => {
        const statusOrders = groupedOrders[status] || [];

        if (statusOrders.length === 0) return null;

        return (
          <div key={status} className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold capitalize">
              {status} Orders ({statusOrders.length})
            </h2>

            <div className="grid gap-4">
              {statusOrders.map((order) => (
                <div key={order.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-semibold">
                        Order #{order.id ? order.id.slice(-6) : "N/A"}
                      </h3>

                      <StatusSelector
                        order={order}
                        pendingUpdates={pendingUpdates}
                        onStatusChange={onStatusChange}
                      />

                      <button
                        onClick={() => onDelete("orders", order.id)}
                        className="rounded-lg bg-red-500 px-4 py-2 text-white"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-medium">{order.createdAt}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="mb-2 font-medium">Order Items</h4>
                    <div className="grid gap-4">
                      {order.items.map((item) => (
                        <div
                          key={item.productId}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded">
                              <Image
                                src={item.imgUrl}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">
                                Quantity: {item.quantity} × €
                                {item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <p className="font-medium">
                            €{(item.quantity * item.price).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Customer</p>
                      <p className="font-medium">
                        {order.personalInfo.name} ({order.personalInfo.email} |{" "}
                        {order.personalInfo.phone}) <br />
                        {order.personalInfo.address}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-xl font-semibold">
                        €
                        {order.items
                          .reduce(
                            (total, item) => total + item.price * item.quantity,
                            0,
                          )
                          .toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CustomersView() {
  return (
    <div className="flex h-64 items-center justify-center rounded-lg bg-white">
      <p className="text-xl text-gray-500">Customers view coming soon...</p>
    </div>
  );
}

interface DashboardViewProps {
  products: Product[];
  orders: Order[];
}

export function DashboardView({ products, orders }: DashboardViewProps) {
  // Calculate total stats
  const totalProducts = products.length;
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum +
      order.items.reduce(
        (orderSum, item) => orderSum + item.price * item.quantity,
        0,
      ),
    0,
  );

  const lowStockProducts = products.filter(
    (product) => product.stock < 10,
  ).length;

  // Order status breakdown
  const orderStatusCounts = orders.reduce(
    (acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const statsCards = [
    {
      icon: <Package className="text-blue-500" size={32} />,
      title: "Total Products",
      value: totalProducts,
      subtext: `${lowStockProducts} low stock`,
    },
    {
      icon: <ShoppingCart className="text-green-500" size={32} />,
      title: "Total Orders",
      value: totalOrders,
      subtext: Object.entries(orderStatusCounts)
        .map(([status, count]) => `${status}: ${count}`)
        .join(" | "),
    },
    {
      icon: <DollarSign className="text-purple-500" size={32} />,
      title: "Total Revenue",
      value: `€${totalRevenue.toFixed(2)}`,
      subtext: "All-time revenue",
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "Unique Customers",
      value: new Set(orders.map((order) => order.personalInfo.email)).size,
      subtext: "Total unique customers",
    },
  ];

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="rounded-full bg-gray-100 p-3">{card.icon}</div>
            <div>
              <h3 className="text-sm text-gray-500">{card.title}</h3>
              <p className="text-2xl font-bold">
                {typeof card.value === "number"
                  ? card.value.toLocaleString()
                  : card.value}
              </p>
              <p className="text-xs text-gray-500">{card.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Products */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Recent Products</h2>
          {products
            .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
            .slice(0, 5)
            .map((product) => (
              <Link
                href={`/shop/product/${product.id}`}
                key={product.id}
                className="flex items-center justify-between border-b py-2 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.imgUrl[0]}
                    alt={product.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      €{product.price.toFixed(2)} | Stock: {product.stock}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    product.stock > 20
                      ? "bg-green-100 text-green-800"
                      : product.stock > 10
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock > 20
                    ? "In Stock"
                    : product.stock > 10
                      ? "Low Stock"
                      : "Out of Stock"}
                </span>
              </Link>
            ))}
        </div>

        {/* Recent Orders */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Recent Orders</h2>
          {orders
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .slice(0, 5)
            .map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b py-2 last:border-b-0"
              >
                <div>
                  <p className="font-medium">Order #{order.id.slice(-6)}</p>
                  <p className="text-sm text-gray-500">
                    {order.personalInfo.name} | {order.createdAt}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      order.status === "delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "canceled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                  <span className="text-sm font-medium">
                    €
                    {order.items
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

interface StatusSelectorProps {
  order: Order;
  pendingUpdates: Record<string, OrderStatus>;
  onStatusChange: (orderId: string, status: OrderStatus) => void;
}

export function StatusSelector({
  order,
  pendingUpdates,
  onStatusChange,
}: StatusSelectorProps) {
  const availableStatuses = ORDER_STATUS_FLOW[order.status as OrderStatus];
  const isPending = pendingUpdates[order.id] !== undefined;

  return (
    <div className="flex items-center gap-2">
      <select
        value={pendingUpdates[order.id] || order.status}
        onChange={(e) =>
          onStatusChange(order.id, e.target.value as OrderStatus)
        }
        disabled={availableStatuses.length === 0}
        className="rounded-lg border px-4 py-2"
      >
        <option value={order.status}>{order.status}</option>
        {availableStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
