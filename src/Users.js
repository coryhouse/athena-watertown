import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./api/userApi";
import { Link } from "react-router-dom";
function Users() {
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
      <Link to="/user">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              {/* Delay execution via arrow func */}
              <td>
                <button onClick={event => handleDelete(user.id)}>Delete</button>
                <Link to={"/user/" + user.id}>
                  <button>
                    Edit{" "}
                    <span aria-label="athena pencil" role="img">
                      ✏️
                    </span>
                  </button>
                </Link>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
