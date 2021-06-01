import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "meagenda.user": user } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
  });

  if (user) {
    const userParse = JSON.parse(user);
    api.defaults.headers["Authorization"] = `Bearer ${userParse.token ?? ""}`;
  }

  return api;
}
