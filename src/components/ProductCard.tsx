import Image from "next/image";
import { Star } from "./Icon";
import Link from "next/link";
import { Product } from "@/lib/type";
import { Rating } from "./Rating";

type ProductCardProps = Pick<
  Product,
  "id" | "title" | "thumbnail" | "price" | "rating"
>;

export function ProductCard(props: ProductCardProps) {
  const { id, title, thumbnail, price, rating } = props;
  return (
    <Link
      href={`/product/${id}`}
      className="rounded-3xl overflow-hidden bg-white shadow-sm grow flex flex-col"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={256}
        height={256}
        className="mx-auto object-contain"
      />
      <div className="px-6 pb-4 pt-2 flex flex-col justify-between grow">
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <Rating rating={rating} />
        <span className="text-xl font-medium">${price}</span>
      </div>
    </Link>
  );
}
