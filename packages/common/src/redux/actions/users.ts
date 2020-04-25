import { Types } from "../../utils/constants";

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items = [] }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const createUserRequest = (firstName: string, lastName: string) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName,
  },
});

export const deleteUserRequest = (userId: number) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: {
    userId,
  },
});

export const usersError = (error: any) => ({
  type: Types.USERS_ERROR,
  payload: {
    error,
  },
});
