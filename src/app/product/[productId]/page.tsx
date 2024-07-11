import { Rating } from "@/components/Rating";
import { Status } from "@/components/Status";
import { getProductDetails } from "@/lib/data";

import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const productDetails = await getProductDetails(params.productId);
  if (!productDetails) return redirect("/not-found");

  const {
    title,
    thumbnail,
    images,
    rating,
    price,
    brand,
    dimensions,
    weight,
    warrantyInformation,
    shippingInformation,
    description,
    returnPolicy,
    availabilityStatus,
    tags,
  } = productDetails;

  return (
    <main className="container mx-auto py-10 px-4 sm:px-5 sm:flex">
      <div className="relative">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={400}
          className="border  mb-2 rounded-xl"
        />
        <Status className="absolute top-4 right-4" status={availabilityStatus} />
        <div className="flex gap-2">
          {images.map((img) => (
            <Image
              key={img}
              src={img}
              alt={title}
              width={100}
              height={100}
              className="border rounded-xl object-scale-down h-24 w-24 overflow-hidden"
            />
          ))}
        </div>
      </div>
      <div className="sm:pl-10">
        <h1 className="text-3xl font-semibold mt-4 sm:mt-0  mb-2">{title}</h1>
        <p className="mb-4 text-balance">{description}</p>
        <Rating rating={rating} />
        <div className="space-x-2">
          {tags.map((tag) => (
            <span key={tag} className="border rounded-lg text-xs px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-2xl font-medium my-4">${price}</p>
        <table>
          <tbody className="text-left [&>tr>th]:p-1 [&>tr>td]:text-right [&>tr>td]:text-sm  [&>tr>td]:p-2 [&>tr>td]:text-gray-600">
            <tr>
              <th scope="row">Brand</th>
              <td>{brand}</td>
            </tr>
            <tr>
              <th scope="row">Dimensions</th>
              <td>
                {dimensions.depth} x {dimensions.width} x {dimensions.height}
              </td>
            </tr>
            <tr>
              <th scope="row">Weight</th>
              <td>{weight}</td>
            </tr>
            <tr>
              <th scope="row">Waranty</th>
              <td>{warrantyInformation}</td>
            </tr>
            <tr>
              <th scope="row">Shipping</th>
              <td>{shippingInformation}</td>
            </tr>
            <tr>
              <th scope="row">Return policy</th>
              <td>{returnPolicy}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
