"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "./Text";
import { calculateTotal } from "../services/helpers";
import { Product } from "../interfaces/data";

export default function Order() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    setCartItems(cartItems);
  }, []);

  return (
    <div>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center border-b border-gray-300 py-2"
        >
          <div className="w-20 h-20 mr-12">
            <Image src={item.image} alt={item.title} width={80} height={80} />
          </div>
          <div>
            <Link
              href={`/${item.category}/${item.id}`}
              className="text-lg font-semibold"
            >
              <Text className="" text={item.title} />
            </Link>
            <Text className="text-gray-600" text={item.subtitle} />
            <p className="text-gray-800">Price: ${item.price}</p>
          </div>
        </div>
      ))}

      <div className="mt-4 text-end">
        <h2 className="text-xl font-semibold mb-8">
          Total Amount: ${calculateTotal(cartItems)}
        </h2>
        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-8 rounded">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
