"use-client";
import Image from "next/image";
import Text from "./Text";
import { Product } from "../interfaces/data";

export default function Preview({
  children,
  productItem,
}: {
  children: React.ReactNode;
  productItem: Product;
}) {
  return (
    <div className="flex mx-auto max-w-screen-xl">
      <div className="flex-1 flex justify-start items-center">
        <Image
          src={productItem.image}
          alt="Product preview image"
          width="450"
          height="900"
        />
      </div>
      <div className="flex-1">
        <Text className="text-5xl pb-8" text={productItem.title} />
        <Text
          className="text-4xl pb-8 text-gray-700"
          text={`$${productItem.price}`}
        />
        <Text
          className="pb-8 text-gray-500 text-justify"
          text={productItem.description}
        />
        {children}
      </div>
    </div>
  );
}
