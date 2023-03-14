import './styles/normalize.css';
import './styles/index.css';
import './requests/products';
import { getProducts, getProductsById, addProduct, deleteProductById } from './requests/products';
import { getAllUsers, getUsersByName, getCartsByUserId, addNewUser } from './requests/users';
import { getPostsById, searchPostsByKeyWord, getAllPosts } from './requests/posts';

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

// const userByNameFormEl = document.querySelector("#userByNameForm");
// const usersByNameEl = document.querySelector("#usersByName");
// userByNameFormEl.addEventListener("submit", onUserByNameFormSubmit);

// function createUsersMarkup(data) {
//   const markup = data
//     .map(
//       (element) => `<li>
//           <p><b>User ID:</b> ${element.id}</p>
//           <p><b>First Name:</b> ${element.firstName}</p>
//           <p><b>Maiden Name:</b> ${element.maidenName}</p>
//           <p><b>Last Name:</b> ${element.lastName}</p>
//           <p><b>Username:</b> ${element.username}</p>
//           <p><b>email:</b> ${element.email}</p>
//         </li>`
//     )
//     .join("");
//   return markup;
// }

// async function onUserByNameFormSubmit(e) {
//   e.preventDefault();
//   const userName = e.target.name.value.trim();
//   const users = await getUsersByName(userName).then(({ data }) => data.users);
//   usersByNameEl.innerHTML = createUsersMarkup(users);
// }

/* Task 7 */

// const userCartsFormEl = document.querySelector("#userCartsForm");
// const cartsEl = document.querySelector("#carts");

// userCartsFormEl.addEventListener("submit", onUserCartsFormSubmit);

// async function onUserCartsFormSubmit(e) {
//   e.preventDefault();
//   const userId = e.target.userId.value;
//   let carts;
//   try {
//     carts = await getCartsByUserId(userId).then(({ data }) => data.carts);
//   } catch (error) {
//     console.log(error.message);
//     return;
//   }
//   if (carts.length === 0) {
//     console.log("There are no products in this user's cart");
//     return;
//   }
//   cartsEl.innerHTML = createCartMarkup(carts);
// }

// function createCartMarkup(carts) {
//   const markup = carts
//     .map(
//       (cart) => `<li>
//           <p><b>Cart ID:</b> ${cart.id}</p>
//           <p><b>Products in cart:</b> ${cart.totalProducts}</p>
//           <p><b>Total Price:</b> ${cart.total}</p>
//           <p><b>Discounted Total:</b> ${cart.discountedTotal}</p>
//           <p><b>Products:</b></p>
//             <ul class="products">
//             ${createProductMarkup(cart.products)}
//             </ul>
//          </li>`
//     )
//     .join("");
//   return markup;
// }

// function createProductMarkup(products) {
//   const markup = products
//     .map(
//       (product) =>
//         `<li>
//           <p><b>Product ID:</b> ${product.id}</p>
//           <p><b>Product Title:</b> ${product.title}</p>
//           <p><b>Quantity:</b> ${product.quantity}</p>
//           <p><b>Price:</b> ${product.price}</p>
//           <p><b>Discount Percentage:</b> ${product.discountPercentage}</p>
//           <p><b>Total Price:</b> ${product.total}</p>
//           <p><b>Discounted Total:</b> ${product.discountedPrice}</p>
//         </li>`
//     )
//     .join("");
//   return markup;
// }

/* Task 8 */

// const userPostsFormEl = document.querySelector('#userPostsForm');
// const postsEl = document.querySelector('#posts');

// userPostsFormEl.addEventListener('submit', onUserPostsFormSubmit);

// async function onUserPostsFormSubmit(e) {
//   e.preventDefault();
//   const userId = e.target.userId.value;
//   const posts = await getPostsById(userId).then(res => res.data.posts);
//   postsEl.innerHTML = createPostsMarkUp(posts);
// }

// function createPostsMarkUp(data) {
//   const markup = data
//     .map(
//       post => `<li><b>Post ID: </b>${post.id}</li>
//       <li><b>Post Title: </b>${post.title}</li>
//       <li><b>Post: </b>${post.body}</li>
//       <li><b>Post Tags: </b>${post.tags}</li>
//       <li><b>Reactions: </b>${post.reactions}</li>
//       </br>`
//     )
//     .join('');
//   return markup;
// }

/* Task 9 */

// const userCreationFormEl = document.querySelector('#userCreationForm');
// userCreationFormEl.addEventListener('submit', onUserCreationFormSubmit);

// async function onUserCreationFormSubmit(e) {
//   e.preventDefault();
//   const userData = {
//     firstName: e.target.firstName.value,
//     lastName: e.target.lastName.value,
//     email: e.target.email.value,
//     password: e.target.password.value,
//   };

//   const newUser = await addNewUser(userData).then(user => user);

//   if (newUser.status === 200) {
//     console.log('New user was successfully created!');
//   } else {
//     console.error('Ooops, something went wrong :(');
//   }
// }

/* Task 10 */

// const filteredPostsFormEl = document.querySelector('#filteredPostsForm');
// const filteredPostsEl = document.querySelector('#filteredPosts');
// filteredPostsFormEl.addEventListener('submit', onFilteredPostsFormElSubmit);

// async function onFilteredPostsFormElSubmit(e) {
//   e.preventDefault();
//   const searchQuery = e.target.keyword.value;
//   console.log(searchQuery);
//   const data = await searchPostsByKeyWord(searchQuery).then(posts => {
//     return posts.data.posts;
//   });
//   if (data.length === 0) {
//     console.log(`There is no posts with "${searchQuery}" in it's body!`);
//   }
//   filteredPostsEl.innerHTML = postsMarkUpCreator(data);
// }

// function postsMarkUpCreator(data) {
//   const markup = data
//     .map(
//       post => `
//       <li><b>User ID: </b>${post.userId}</li>
//       <li><b>Post ID: </b>${post.id}</li>
//       <li><b>Post Title: </b>${post.title}</li>
//       <li><b>Post: </b>${post.body}</li>
//       <li><b>Post Tags: </b>${post.tags}</li>
//       <li><b>Reactions: </b>${post.reactions}</li>
//       </br>`
//     )
//     .join('');
//   return markup;
// }

/* Task 11 */

const allPostsEl = document.getElementById('allPosts');

onLoad();

async function onLoad() {
  const allPosts = await getAllPosts().then(data => data.data.posts);
  const markup = renderPosts(allPosts);
  allPostsEl.innerHTML = markup;
  const postFormElements = document.querySelectorAll('#postForm');
  postFormElements.forEach(element => {
    element.addEventListener('submit', onPostEdit);
  });
}

function onPostEdit(e) {
  e.preventDefault();
  const editPostInputEl = e.target.editPost;
  const postBody = e.target.querySelector('#postBody').textContent;
  editPostInputEl.value = postBody;
  editPostInputEl.style.display = 'block';
  e.target.querySelector('#editPostButton').textContent = 'Save';
}

function renderPosts(data) {
  const markup = data
    .map(
      post => `
      <li>
        <form id="postForm">
            <p><b>User ID: </b>${post.userId}</p>
            <p><b>Post ID: </b>${post.id}</p>
            <p><b>Post Title: </b>${post.title}</p>
            <p id="postBody" name="postBody"><b>Post: </b>${post.body}</p>
            <p><b>Post Tags: </b>${post.tags}</p>
            <p><b>Reactions: </b>${post.reactions}</p>
            <textarea  style="display: none; width: 40%; height: 200px" cols="40" rows="5" id="editPostInput" type="text" name="editPost"></textarea>
            <button id="editPostButton" type="submit">Edit Post</button>
        </form>
        </br>
      </li>`
    )
    .join('');
  return markup;
}
