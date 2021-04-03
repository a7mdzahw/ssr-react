import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../store/users";

const Users = () => {
  const { list: users } = useSelector((state) => state.users);
  return (
    <div className="container">
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export const getServerSideData = (store) => {
  console.log("calling api");
  const users = [
    {
      id: 1,
      name: "ahmed",
    },
    {
      id: 2,
      name: "Ali",
    },
    {
      id: 3,
      name: "Mohamed",
    },
  ];
  store.dispatch(getUsers(users));
};

export default Users;
