import { instance } from "../services/api";

export async function getAllUsers() {
  const allUsers = await instance.get("/users");
  return allUsers;
}

export async function getUsersByName(name) {
  const users = await instance.get(`/users/search?q=${name}`);
  return users;
}

export async function getCartsByUserId(id) {
  const carts = await instance.get(`/carts/user/${id}`);
  return carts;
}
