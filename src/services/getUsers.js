import http from "./httpService";
import { getJwtKey } from "./authService";
import jwt_decode from "jwt-decode";

export async function getUsers() {
  const users = await http.get("http://localhost:3001/users");
  return users;
}

export async function loggedInUser() {
  const jwtKey = getJwtKey();
  const { email } = jwt_decode(jwtKey);

  const user = await http.get("http://localhost:3001/users/" + email);
  return user;
}

export async function getSearchedUser() {
  const user = await http.get("http://localhost:3001/users/:_id");
  return user;
}
