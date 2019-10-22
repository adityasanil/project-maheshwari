import http from "./httpService";
import { getJwtKey } from "./authService";
import jwt_decode from "jwt-decode";

const backEndUrl = "http://localhost:3001/users/";

export async function getUsers() {
  const users = await http.get(backEndUrl);
  return users;
}

export async function getIndustryUsersList(industryName) {
  const industryUserList = await http.get(
    backEndUrl + "industry/" + industryName
  );
  return industryUserList;
}

export async function loggedInUser() {
  const jwtKey = getJwtKey();
  const { email } = jwt_decode(jwtKey);

  const user = await http.get(backEndUrl + email);
  return user;
}

export async function getSearchedUser(id) {
  const searchedUser = await http.get(backEndUrl + "profile/" + id);
  return searchedUser;
}
