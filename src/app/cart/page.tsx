"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    

    if (savedCartData) {
      setCartItems(JSON.parse(savedCartData)); // Local storage ka data state mein set karna
    }
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (id: number, action: "increment" | "decrement") => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity =
          action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36 mt-10">
      <h1 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold">
        Your Cart
      </h1>
      {cartItems.length > 0 ? (
        <div className="mt-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap gap-3 px-4 sm:px-6 md:px-16 lg:px-24 items-center mb-5 border rounded-[20px] w-full"
            >
              <Image
                src={item.image || "/noting"}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold">
                  {item.title}
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-500">
                  {item.price}
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  className="px-2 sm:px-3 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, "decrement")}
                >
                  -
                </button>
                <span className="text-[14px] sm:text-[16px] lg:text-[18px]">
                  {item.quantity}
                </span>
                <button
                  className="px-2 sm:px-3 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, "increment")}
                >
                  +
                </button>
              </div>
              <button
                className="px-3 sm:px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <hr />
          <div className="text-right mt-5">
            <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-500 mt-5">
          Your cart is empty.
        </p>
      )}
    </div>
  );
}

export default CartPage;
