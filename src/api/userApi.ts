import { get, patch } from "../utils/fetch";
import { User } from "../types/User";

export const getUser = (id: number) => {
  return get(`user/${id}/`);
};

export const profile = async () => {
  return get(`user/me/`);
};

export const updateProfile = async (newUser: Partial<User>) => {
  return patch(`user/me/`, newUser);
};
