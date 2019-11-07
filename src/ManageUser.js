import React, { useState } from "react";

const ManageUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  function handleSubmit(event) {}
  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" value={user.name}></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email" value={user.email}></input>
        </div>

        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default ManageUser;
