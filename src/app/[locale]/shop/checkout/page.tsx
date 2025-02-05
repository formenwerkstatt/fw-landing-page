"use client";
import { addDocument, getCollection } from "@/app/actions";
import { createOrder } from "@/app/actions/orders";
import { useUser } from "@/app/providers";
import Breadcrumb from "@/components/Common/Breadcrumb";
import OrderHistory from "@/components/Shop/OrderHistory";
import QuantityCounter from "@/components/Shop/QuantityCounter";
import { createCheckoutUrl } from "@/lib/shopify";
import { CartItem, Order } from "@/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Checkout() {
  const { user, updateUser, isUpdating } = useUser();
  const [paymentForm, setPaymentForm] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const userOrders = orders.filter((order) => order.userId === user?.id);

  // useEffect(() => {
  //   async function fetchOrders() {
  //     const fetchedOrders = (await getCollection("orders")) as Order[];
  //     setOrders(fetchedOrders);
  //   }
  //   fetchOrders();
  // }, []);

  if (!user) return null;

  const totalPrice = parseFloat(
    user.cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2),
  );

  const handleCheckout = async () => {
    if (user?.cart.length < 1) return;

    try {
      const checkoutUrl = await createCheckoutUrl(user.cart);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      console.log("Checkout done");
    }
  };

  async function handleAddOrder(formData: any) {
    if (!user) return null;
    if (window.confirm("Do you confirm the payment?")) {
      const newOrder = {
        userId: user.id,
        personalInfo: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.streetAddress}, ${formData.postalCode}, ${formData.city},`,
        },
        status: "pending",
        items: user.cart,
      };

      // const addedOrder = await addDocument("orders", newOrder);
      const addedOrder = await createOrder(newOrder as Order);

      setOrders((prev) => [...prev, addedOrder]);

      updateUser({
        cart: [],
      });

      setPaymentForm(false);
    }
  }

  function handleRemoveFromCart(item: CartItem) {
    if (!user) return;

    if (window.confirm("Are you sure you want to remove this item?")) {
      updateUser({
        cart: user.cart.filter((cartItem) => cartItem.id !== item.id),
      });
    }
  }

  function setQuantity(quantity: number, item: CartItem) {
    if (!user) return;

    if (quantity === 0) {
      handleRemoveFromCart(item);
    } else {
      updateUser({
        cart: user.cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem,
        ),
      });
    }
  }

  return (
    <>
      <Breadcrumb
        pageName="Cart"
        description="Last stop before paying"
        showLink={false}
      />

      <section
        className={cn(
          "container mb-24 grid gap-8",
          user.cart.length > 0 && "lg:grid-cols-[3fr_1fr]",
        )}
      >
        <div className="flex flex-col gap-4">
          {user.cart.length === 0 ? (
            <div className="flex h-[40dvh] flex-col items-center justify-center gap-12">
              <p className="text-center text-3xl">Your cart is empty</p>
              <Link
                href="/shop"
                className="rounded-lg bg-primary px-4 py-2 text-lg text-white"
              >
                Back to Shop
              </Link>
            </div>
          ) : (
            user.cart.map((item) => (
              <div
                key={item.productId}
                className={cn(
                  "flex flex-wrap gap-4 md:flex-nowrap md:justify-between",
                  "rounded-lg bg-gray-light p-4 shadow-lg dark:bg-gray-dark",
                )}
              >
                <div className="flex gap-8">
                  <Image
                    className="h-24 w-24 rounded-lg object-cover"
                    src={item.imgUrl}
                    alt={item.name}
                    width={300}
                    height={300}
                  />
                  <h3 className="text-lg">{item.name}</h3>
                </div>

                <div className="flex flex-1 flex-col gap-4 text-right md:flex-none">
                  <p className="text-2xl font-semibold">{item.price} €</p>

                  <div className="flex justify-between gap-8">
                    <QuantityCounter
                      setQuantity={(newQuantity) =>
                        setQuantity(newQuantity, item)
                      }
                      quantity={item.quantity}
                      isUpdating={isUpdating}
                      small
                    />

                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className={cn(
                        "rounded-full  text-2xl text-gray-300  ",
                        isUpdating &&
                          "pointer-events-none cursor-wait bg-gray-200",
                        "hover:text-gray-dark",
                      )}
                    >
                      <FaRegTrashCan />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {user.cart.length > 0 && (
          <div
            className={cn(
              "flex h-[40dvh] w-full flex-col justify-between p-4 text-center",
              "rounded-xl bg-gray-light dark:bg-gray-dark",
              "shadow-xl dark:shadow-none",
              isUpdating && "bg-gray-200",
            )}
          >
            <h2 className=" text-2xl font-bold">Total</h2>

            <p className=" text-3xl font-semibold">{totalPrice} €</p>
            <p>
              MvSt. inkl. <br />
              <span className="font-semibold">
                {(totalPrice * 1.19).toFixed(2)} €
              </span>
            </p>
            {/* <Checkout /> */}
            <button
              onClick={handleCheckout}
              className="flex bg-primary text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </section>

      <OrderHistory orders={userOrders} />

      {/* {paymentForm && (
        <CheckoutForm
          handleSubmit={handleAddOrder}
          setConfirmOrder={setPaymentForm}
        />
      )} */}
    </>
  );
}
