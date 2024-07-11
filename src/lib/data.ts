import { Product } from "./type";

export async function getProducts() {
  const response = await fetch("http://localhost:300/data/products.json");
  const productListData = await response.json();
  const { products } = productListData;
  return products as Product[];
}

export async function getProductDetails(productId: number) {
  const response = await fetch("http://localhost:300/data/products.json");
  const productListData = await response.json();
  const { products } = productListData;
  const product = (products as Product[]).find(
    (product) => product.id === productId
  );
  return product;
}
