import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Cory", email: "c@h.com" },
    { id: 2, name: "Megan", email: "m@c.com" },
    { id: 3, name: "Tami", email: "t@tonga.com" }
  ]);

  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  function handleDelete(id) {
    // Remove deleted element from users array
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers); // update state, so React knows to re-render
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
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
