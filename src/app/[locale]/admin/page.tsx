"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Product, Order } from "@/types";
import {
  addDocument,
  deleteDocument,
  getCollection,
  updateDocument,
} from "@/app/actions";
import { mockProducts } from "./mockData";
import { LayoutGrid, Package, ShoppingCart, Users } from "lucide-react";
import {
  CustomersView,
  DashboardView,
  OrdersView,
  ProductsView,
} from "./Components";

type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "canceled";

async function resetDatabase() {
  const products = await getCollection<Product>("products");
  await Promise.all(
    products.map((product) => deleteDocument("products", product.id)),
  );
}

async function initializeMockData() {
  for (let i = 0; i < mockProducts.length; i++) {
    const product = {
      stock: Math.round(Math.random() * 200),
      price: parseFloat((Math.random() * (200.0 - 3.5) + 3.5).toFixed(2)),
      ...mockProducts[i],
    };
    await addDocument("products", product);
  }
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "dashboard";

  const [isLoading, setIsLoading] = useState(true);

  const [pendingUpdates, setPendingUpdates] = useState<
    Record<string, OrderStatus>
  >({});

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setPendingUpdates((prev) => ({
      ...prev,
      [orderId]: newStatus,
    }));
  };

  const saveStatusUpdates = async () => {
    try {
      await Promise.all(
        Object.entries(pendingUpdates).map(([orderId, status]) =>
          updateDocument("orders", orderId, { status }),
        ),
      );
      await fetchOrders();
      setPendingUpdates({});
    } catch (error) {
      console.error("Error updating orders:", error);
    }
  };

  const pageComponents = {
    products: () => (
      <ProductsView
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ),
    orders: () => (
      <OrdersView
        orders={orders}
        pendingUpdates={pendingUpdates}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    ),
    customers: () => <CustomersView />,
    dashboard: () => <DashboardView products={products} orders={orders} />,
  };

  const content = pageComponents[
    currentPage as keyof typeof pageComponents
  ]?.() || (
    <div className="flex h-64 items-center justify-center rounded-lg bg-white">
      <p className="text-xl text-gray-500">
        {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} page coming
        soon...
      </p>
    </div>
  );

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, [currentPage]);

  async function fetchProducts() {
    setIsLoading(true);
    const productsData = await getCollection<Product>("products");
    setProducts(productsData);
    setIsLoading(false);
  }

  async function fetchOrders() {
    setIsLoading(true);
    const ordersData = await getCollection<Order>("orders");
    setOrders(ordersData);
    setIsLoading(false);
  }

  async function handleEdit(product: Product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  async function handleAdd() {
    setSelectedProduct(null);
    setIsModalOpen(true);
  }

  async function handleDelete(collectionName: string, productId: string) {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteDocument(collectionName, productId);
      if (collectionName === "products") {
        fetchProducts();
      }
      if (collectionName === "orders") {
        fetchOrders();
        setPendingUpdates({});
      }
    }
  }

  async function handleReset() {
    if (confirm("Are you sure you want to reset the database?")) {
      await resetDatabase();
      await initializeMockData();
      fetchProducts();
    }
  }

  const navigateToPage = (page: string) => {
    router.push(`/admin?page=${page}`);
  };

  return (
    <div className="fixed inset-0 z-[999] flex w-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="flex h-16 items-center justify-center border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigateToPage("dashboard")}
                className={`flex w-full items-center gap-2 rounded-lg p-2 transition-colors ${
                  currentPage === "dashboard"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <LayoutGrid size={20} />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToPage("products")}
                className={`flex w-full items-center gap-2 rounded-lg p-2 transition-colors ${
                  currentPage === "products"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Package size={20} />
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToPage("orders")}
                className={`flex w-full items-center gap-2 rounded-lg p-2 transition-colors ${
                  currentPage === "orders"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <ShoppingCart size={20} />
                Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToPage("customers")}
                className={`flex w-full items-center gap-2 rounded-lg p-2 transition-colors ${
                  currentPage === "customers"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Users size={20} />
                Customers
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h2 className="text-xl font-semibold">
            {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
          </h2>

          <div className="flex items-center gap-4">
            {currentPage === "orders" && (
              <div className="flex items-center gap-4">
                {Object.keys(pendingUpdates).length > 0 && (
                  <button
                    onClick={saveStatusUpdates}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white"
                  >
                    Save Status Changes ({Object.keys(pendingUpdates).length})
                  </button>
                )}
              </div>
            )}
            <button
              className="rounded-lg bg-red-500 px-4 py-2 text-white"
              onClick={handleReset}
            >
              Reset Database
            </button>
            <button
              className="rounded-lg bg-blue-500 px-4 py-2 text-white"
              onClick={handleAdd}
            >
              Add Product
            </button>
          </div>
        </header>

        <main className="h-[calc(100vh-4rem)] overflow-auto p-6">
          {content}
        </main>
      </div>

      {/* Product Modal */}
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onSuccess={() => {
            fetchProducts();
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSuccess: () => void;
}

function ProductModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}: ProductModalProps) {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      price: 0,
      stock: 0,
      imgUrl: [""],
      description: "",
    },
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (product) {
        await updateDocument("products", product.id, formData);
      } else {
        await addDocument("products", formData);
      }
      onSuccess();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="mx-8 grid w-full rounded-lg bg-white p-6">
        <div>
          <h2 className="mb-4 text-xl font-bold">
            {product ? "Edit Product" : "Add Product"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded border p-2"
                required
              />
            </div>
            <div>
              <label className="mb-1 block">Price</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                className="w-full rounded border p-2"
                required
              />
            </div>
            <div>
              <label className="mb-1 block">Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: Number(e.target.value) })
                }
                className="w-full rounded border p-2"
                required
              />
            </div>
            <div>
              <label className="mb-1 block">Image URL</label>
              <input
                type="text"
                value={formData.imgUrl}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    imgUrl: [...formData.imgUrl, e.target.value],
                  })
                }
                className="w-full rounded border p-2"
                required
              />
            </div>
            <div>
              <label className="mb-1 block">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full rounded border p-2"
                rows={4}
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-red-500 px-4 py-2 text-lg text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-4 py-2 text-lg text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
