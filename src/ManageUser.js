import React, { useState } from "react";
import { addUser } from "./api/userApi";
import { Redirect } from "react-router-dom";
import Input from "./Input";

const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  const [saveCompleted, setSaveCompleted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); // Stop browser from posting back
    const savedUser = await addUser(user);
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

export default ManageUser;
