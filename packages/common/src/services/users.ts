import axios from "axios";

export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};

export const createUser = (action: any) => {
  let firstName = action.payload.firstName;
  let lastName = action.payload.lastName;
  return axios.post("/users", {
    firstName,
    lastName,
  });
};

export const deleteUser = (userId: number) => {
  return axios.delete(`/users/${userId}`);
};
