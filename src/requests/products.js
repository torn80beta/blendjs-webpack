import { instance } from "../services/api";

export async function getProducts() {
  const data = await instance.get("/products");
  return data;
}

export async function getProductsById(productId) {
  const product = await instance.get(`/products/${productId}`);
  return product;
}

export async function addProduct(product) {
  const newProduct = await instance.post("/products/add", product, {
    headers: { "Content-Type": "application/json" },
  });
  return newProduct;
}

export async function deleteProductById(productId) {
  try {
    const deletedProduct = await instance.delete(`/products/${productId}`);
    return deletedProduct;
  } catch (error) {
    console.error(error.message);
  }
}
