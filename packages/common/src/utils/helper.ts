import User from "../models/Users/userModel";
import axios from "axios";

export const setBaseUrl = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";
};

export const stringToHslColor = (str = "") => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h},60%,80%)`;
};

export const sort = (users: User[]) => {
  if (users.length === undefined) return users;

  users.sort((a: User, b: User) => {
    if (a.firstName > b.firstName) {
      return 1;
    } else if (a.firstName < b.firstName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    } else if (a.lastName < b.lastName) {
      return -1;
    }
    return 0;
  });
  return users;
};
