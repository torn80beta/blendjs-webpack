import { instance } from '../services/api';

export async function getProducts() {
  const data = await instance.get('/products');
  return data;
}

export async function getProductsById(productId) {
  const product = await instance.get(`/products/${productId}`);
  return product;
}

export async function addProduct(product) {
  const newProduct = await instance.post('/products/add', product, {
    headers: { 'Content-Type': 'application/json' },
  });
  return newProduct;
}
