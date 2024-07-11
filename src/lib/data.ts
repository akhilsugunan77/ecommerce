import { Product } from "./type";

const DATA_PATH = process.env.BASE_PATH
  ? `${process.env.BASE_PATH}/data/products.json`
  : "http://localhost:3000/data/products.json";

export async function getProducts() {
  const response = await fetch(DATA_PATH);
  const productListData = await response.json();
  const { products } = productListData;
  return products as Product[];
}

export async function getProductDetails(productId: string) {
  const response = await fetch(DATA_PATH);
  const productListData = await response.json();
  const { products } = productListData;
  const product = (products as Product[]).find(
    (product) => String(product.id) === productId
  );
  return product;
}
