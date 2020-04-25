import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from "../../redux/actions/users";
import UserList from "./components/userList";
import User from "../../models/Users/userModel";
import { View } from "react-native";

interface IUsersProps {
  getUsersRequest: Function;
  createUserRequest: Function;
  deleteUserRequest: Function;
  usersError: Function;
  users: any;
}

class Users extends Component<IUsersProps> {
  constructor(props: IUsersProps) {
    super(props);

    this.props.getUsersRequest();
  }

  handleCreateUserSubmit = ({ firstName, lastName }: User) => {
    this.props.createUserRequest(firstName, lastName);
  };

  handleDeleteUserClick = (userId: number) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: "",
    });
  };

  render() {
    const users = this.props.users;
    return (
      <View style={{ margin: "0 auto", padding: 20, maxWidth: "600" }}>
        <UserList users={users.items} />
      </View>
    );
  }
}
export default connect(
  ({ users }: IUsersProps) => ({ users }),
  {
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
    usersError,
  }
)(Users);
