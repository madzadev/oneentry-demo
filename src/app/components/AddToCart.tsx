"use client";
import React, { useState, useEffect } from "react";
import { boughtStatus, cartIndex } from "../services/helpers";
import { Product } from "../interfaces/data";

export default function AddToCart({
  category,
  id,
  title,
  subtitle,
  image,
  price,
}: Product) {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const isPurchased = boughtStatus(storedCartItems, id);
  const indexInCart = cartIndex(storedCartItems, id);
  const [btnState, setBtnState] = useState(false);

  useEffect(() => {
    isPurchased && setBtnState(true);
  }, []);

  const handleButtonClick = () => {
    const updatedCartItems = [...storedCartItems];

    if (!btnState && !isPurchased) {
      updatedCartItems.push({ category, id, title, subtitle, image, price });
    } else if (isPurchased) {
      updatedCartItems.splice(indexInCart, 1);
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setBtnState(!btnState);
  };

  return (
    <button
      className={`${
        !btnState
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-yellow-300 hover:bg-yellow-400"
      } py-2 px-8 rounded`}
      onClick={handleButtonClick}
    >
      {!btnState ? "Add to Cart" : "Remove from Cart"}
    </button>
  );
}
