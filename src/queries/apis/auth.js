import { request } from "./config";

export const singIn = (data) => request({ url: "login", method: "POST", data });
