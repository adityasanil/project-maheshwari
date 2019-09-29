import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/login";

export function login(email, password) {
  return http.post(apiEndPoint, { email, password });
}
