import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put,
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as userService from "../../services/users";
import { Types } from "../../utils/constants";

function* getUsers() {
  try {
    const result = yield call(userService.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data,
      })
    );
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occured when trying to get the users",
      })
    );
  }
}

function* createUser(action: any) {
  try {
    yield call(userService.createUser, action);
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occured when trying to create the user",
      })
    );
  }
}

function* deleteUser(userId: number) {
  try {
    yield call(userService.deleteUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occured when trying to delete the user",
      })
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  yield takeLatest(Types.CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(Types.DELETE_USER_REQUEST);
    yield call(deleteUser, action.payload.userId);
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
