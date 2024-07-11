export function Status({
  className,
  status,
}: {
  className: string;
  status: string;
}) {
  const isAvailable = status === "In Stock";
  return (
    <span
      className={`text-xs border px-2 py-1 rounded-lg ${
        isAvailable
          ? "border-green-500 bg-green-500 text-white"
          : "border-red-500 bg-red-500 text-white"
      }  ${className}`}
    >
      {status}
    </span>
  );
}
