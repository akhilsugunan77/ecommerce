import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="container mx-auto px-4 sm:px-5 py-10">
      <h1 className="text-3xl mb-10">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4  xl:grid-cols-5 gap-2">
        {products?.map(({ id, price, thumbnail, title, rating }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              thumbnail={thumbnail}
              title={title}
              price={price}
              rating={rating}
            />
          );
        })}
      </div>
    </main>
  );
}
