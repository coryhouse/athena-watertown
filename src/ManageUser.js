import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";

const ManageUser = ({ onAddUser, users, onEditUser }) => {
  const match = useRouteMatch(); // info about the matching URL
  const { userId } = match.params;

  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  const [saveCompleted, setSaveCompleted] = useState(false);

  useEffect(() => {
    if (userId && users.length > 0) {
      const userToEdit = users.find(user => user.id === parseInt(userId, 10));
      if (!userToEdit) return; // todo Show 404 page because user wasn't found
      setUser(userToEdit);
    }
  }, [userId, users]);

  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back
    user.id ? await onEditUser(user) : await onAddUser(user);
    setSaveCompleted(true);
  }

  function handleUserChange(event) {
    // Use computed property syntax to reference a property using a variable.
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  return (
    <>
      {saveCompleted && <Redirect to="/users" />}
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          onChange={handleUserChange}
          value={user.name}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          onChange={handleUserChange}
          value={user.email}
        />

        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
  onEditUser: PropTypes.func.isRequired
};

export default ManageUser;
