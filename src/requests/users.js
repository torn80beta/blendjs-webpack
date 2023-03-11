import { instance } from "../services/api";

export async function getAllUsers() {
  const allUsers = await instance.get("/users");
  return allUsers;
}
