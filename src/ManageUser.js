import React, { useState } from "react";

const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  function handleSubmit(event) {}

  function handleUserChange(event) {
    // Use computed property syntax to reference a property using a variable.
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            onChange={handleUserChange}
            value={user.name}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            onChange={handleUserChange}
            value={user.email}
          ></input>
        </div>

        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default ManageUser;
