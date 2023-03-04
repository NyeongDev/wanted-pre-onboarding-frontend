import { instance } from "./instance";

export const signUpApi = formContent =>
  instance.post(`/auth/signup`, formContent);

export const signInApi = formContent =>
  instance.post(`/auth/signin`, formContent);
