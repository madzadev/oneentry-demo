import Link from "next/link";
import Text from "../components/Text";
import { Product } from "../interfaces/data";

export default function Card({ product }: { product: Product }) {
  return (
    <Link href={`/${product.category}/${product.id}`}>
      <div className="group relative">
        <div className="group-hover:opacity-75 h-80">
          <img
            src={product.image}
            alt="Product card image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Text className="" text={product.title} />
            </h3>
            <Text
              className="mt-1 text-sm text-gray-500"
              text={product.subtitle}
            />
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
