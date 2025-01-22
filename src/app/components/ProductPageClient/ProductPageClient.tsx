"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number;
  isNew: boolean;
  colors: string;
  sizes: string;
  
}

const ProductPageClient = ({ product }: { product: Product }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      title: product.name,
      price: product.price,
    };

    setCartItems([...cartItems, cartItem]);
    localStorage.setItem("cartData", JSON.stringify([...cartItems, cartItem]));
  };

  return (
    <div>
      <div className="lg:mx-36 mt-10 lg:ml-[200px]">
        <div className="lg:flex lg:gap-16">
          {product.imageUrl ? (
            <Image
              src={urlFor(product.imageUrl).url()!}
              alt={product.name || "Product Image"}
              width={295}
              height={298}
              className="rounded-[20px]"
            />
          ) : (
            <p>Image not available</p>
          )}
          <div>
            <h1 className="font-bold lg:text-[40px]">{product.name}</h1>
            <div>
              <p className="font-bold text-[32px]">{product.price}</p>
              <div>
                <p className="w-[20px] bg-red-300 text-[16px] font-medium mt-2 text-red-500 rounded-[62px]">
                  {product.discountPercent}
                </p>
              </div>
              <div>
                <p className="font-normal text-gray-500 text-[16px] lg:w-[590px] mt-7">
                  {product.description}
                </p>
              </div>
              <div className="lg:flex">
                <div className="mt-3 flex items-center gap-4 w-[170px] h-[52px] rounded-[62px] bg-gray-300 pl-14">
                  <button onClick={handleDecrement} className="text-black">
                    -
                  </button>
                  <p className="text-[20px] font-medium">{quantity}</p>
                  <button onClick={handleIncrement} className=" text-black">
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-black text-white font-medium text-[16px] lg:w-[400px] h-[52px] px-[54px] py-[16px] lg:ml-[54px] rounded-[62px] mt-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-normal text-gray-500 text-[20px] mt-3">Sizes</h4>
                <p className="font-normal text-gray-500 text-[16px] lg:w-[590px]">{product.sizes}</p>
              </div>
              <div>
                <h1 className="font-normal text-gray-500 text-[20px] mt-3">Colors</h1>
                <p>{product.colors}</p>
              </div>
              <div>
                <p>{product.isNew}</p>
                <h1 className="font-normal text-gray-500 text-[20px] mt-3">Category</h1>
                <p>{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageClient;
