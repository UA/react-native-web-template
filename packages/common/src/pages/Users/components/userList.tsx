import React from "react";
import UserListItem from "./userListItem";

import User from "../../../models/Users/userModel";
import { sort } from "../../../utils/helper";
import { View } from "react-native";

interface IUserListProps {
  users: User[];
}

const UserList = ({ users }: IUserListProps) => {
  if (users.length === undefined) users = [];

  const sortedUsers = sort(users);
  return (
    <View>
      {sortedUsers &&
        sortedUsers.map((user) => {
          return (
            <View key={user.id}>
              <UserListItem user={user} />
            </View>
          );
        })}
    </View>
  );
};

export default UserList;
