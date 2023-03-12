import { instance } from "../services/api";

export async function getAllUsers() {
  const allUsers = await instance.get("/users");
  return allUsers;
}

export async function getUsersByName(name) {
  const users = await instance.get(`/users/search?q=${name}`);
  return users;
}
