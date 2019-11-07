import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render.
  useEffect(() => {
    // Using _users to avoid naming confusion with users above
    getUsers().then(_users => setUsers(_users));
  }, []);

  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); // update state, so React knows to re-render
    });
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      {/* Display user data in a table with headers for id, name, and email */}
      <ul>
        {users.map(user => (
          <li>
            {/* Delay execution via arrow func */}
            <button onClick={event => handleDelete(user.id)}>Delete</button>
            {user.name}
          </li>
        ))}
      </ul>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text"></input>
      <p>My app.</p>
    </>
  );
}

export default App;
