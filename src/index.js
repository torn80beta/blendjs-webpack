import "./styles/normalize.css";
import "./styles/index.css";
import "./requests/products";
import {
  getProducts,
  getProductsById,
  addProduct,
  deleteProductById,
} from "./requests/products";
import { getAllUsers } from "./requests/users";

/* Task 1 */
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

/* Task 2 */

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

/* Task 3 */

// const newProductFormEl = document.querySelector('#newProductForm');
// const newProductSectionEl = document.querySelector('#newProductSection');
// newProductFormEl.addEventListener('submit', addNewProduct);

// async function addNewProduct(e) {
//   e.preventDefault();
//   const title = e.target.title.value;
//   const description = e.target.description.value;
//   const price = e.target.price.value;
//   const { data: newProduct } = await addProduct({ title, description, price });
//   console.log(newProduct);

//   const markup = `
//           <h2 class="title">${newProduct.title}</h2>
//           <p class="price">${newProduct.price}</p>
//           <p class="description">${newProduct.description}</p>
//         `;

//   newProductSectionEl.innerHTML = markup;
//   e.target.reset();
// }

/* Task 4 */

// const deletionProductFormEl = document.querySelector("#deletionProductForm");
// deletionProductFormEl.addEventListener("submit", onDeletionProductFormSubmit);

// async function onDeletionProductFormSubmit(e) {
//   e.preventDefault();
//   const productId = e.target.deletionId.value;
//   await deleteProductById(productId)
//     .then(({ data }) => {
//       if (data.isDeleted === true) {
//         alert(
//           `Product ${data.title} was successfully deleted on ${data.deletedOn}`
//         );
//       }
//     })
//     .catch((error) => console.log(error.message));
// }

/* Task 5 */

// const allUsersEl = document.querySelector("#allUsers");

// async function renderUsers() {
//   const markup = await getAllUsers().then(({ data }) =>
//     data.users
//       .map(
//         (user) => `<li>
//           <p><b>User ID:</b> ${user.id}</p>
//           <p><b>First Name:</b> ${user.firstName}</p>
//           <p><b>Last Name:</b> ${user.lastName}</p>
//           <p><b>Username:</b> ${user.username}</p>
//           <p><b>email:</b> ${user.email}</p>
//         </li>`
//       )
//       .join("")
//   );
//   allUsersEl.innerHTML = markup;
// }

// renderUsers();

/* Task 6 */
