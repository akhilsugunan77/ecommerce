import { Product } from "./type";

const DATA_PATH = "http://localhost:3000/data/products.json"

export async function getProducts() {
  const response = await fetch(DATA_PATH);
  const productListData = await response.json();
  const { products } = productListData;
  return products as Product[];
}

export async function getProductDetails(productId: number) {
  const response = await fetch(DATA_PATH);
  const productListData = await response.json();
  const { products } = productListData;
  const product = (products as Product[]).find(
    (product) => product.id === productId
  );
  return product;
}
