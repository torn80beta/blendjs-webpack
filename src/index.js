import './styles/normalize.css';
import './styles/index.css';
import './requests/products';
import { getProducts, getProductsById, addProduct } from './requests/products';

// const allProductsEl = document.querySelector("#allProducts");

// async function createMarkup() {
//   const { data } = await getProducts();
//   const markup = data.products
//     .map(
//       (product) =>
//         `<li class="product">
//           <h2 class="title">${product.title}</h2>
//           <p class="price">${product.price}</p>
//           <p class="description">${product.description}</p>
//         </li>`
//     )
//     .join("");
//   allProductsEl.innerHTML = markup;
// }

// createMarkup();

// const singleProductCard = document.querySelector('#singleProduct');
// const singleProductForm = document.querySelector('#singleProductForm');

// singleProductForm.addEventListener('submit', singleProductFormSubmitHandler);

// function singleProductFormSubmitHandler(e) {
//   e.preventDefault();
//   const productIdForSearch = e.target.id.value;
//   renderProductCard(productIdForSearch);
//   e.target.reset();
// }

// async function renderProductCard(productId) {
//   const { data: product } = await getProductsById(productId);
//   const markup = `
//           <h2 class="title">${product.title}</h2>
//           <p class="price">${product.price}</p>
//           <p class="description">${product.description}</p>
//           <img src="${product.images[0]}"/>
//         `;

//   singleProductCard.innerHTML = markup;
// }

const newProductFormEl = document.querySelector('#newProductForm');
const newProductSectionEl = document.querySelector('#newProductSection');
newProductFormEl.addEventListener('submit', addNewProduct);

async function addNewProduct(e) {
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  const price = e.target.price.value;
  const { data: newProduct } = await addProduct({ title, description, price });
  console.log(newProduct);

  const markup = `
          <h2 class="title">${newProduct.title}</h2>
          <p class="price">${newProduct.price}</p>
          <p class="description">${newProduct.description}</p>
        `;

  newProductSectionEl.innerHTML = markup;
  e.target.reset();
}
