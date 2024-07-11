import { Star } from "./Icon";

export function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center  gap-0.5 mb-2">
      <span>{rating}</span>
      {Array.from({ length: Math.floor(rating) }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}
