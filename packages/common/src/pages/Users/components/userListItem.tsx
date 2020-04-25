import React from "react";
import User from "../../../models/Users/userModel";
import { View, Text } from "react-native";

interface IUserListItemProps {
  user: User;
}

const UserListItem = ({ user }: IUserListItemProps) => {
  return (
    <View>
      <Text>
        {user.firstName} {user.lastName}
      </Text>
    </View>
  );
};

export default UserListItem;
