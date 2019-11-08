import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, addUser, editUser } from "./api/userApi";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import InternationalizationContext from "./InternationalizationContext";

function App() {
  const [users, setUsers] = useState([]);
  const [language, setLanguage] = useState("English");

  // useEffect runs by default after every render.
  useEffect(() => {
    // Using _users to avoid naming confusion with users above
    getUsers().then(_users => setUsers(_users));
  }, []);

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); // update state, so React knows to re-render
    });
  }

  async function handleAddUser(user) {
    const savedUser = await addUser(user);
    setUsers([...users, savedUser]);
  }

  async function handleEditUser(user) {
    const savedUser = await editUser(user);

    // replace the saved user in the array using map
    setUsers(users.map(u => (u.id === user.id ? savedUser : u)));
  }

  return (
    <InternationalizationContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage
      }}
    >
      <Nav />
      {/* When the URL is at root, load the users component. */}
      <Route path="/" component={Home} exact />
      <Route
        path="/users"
        render={reactRouterProps => {
          return <Users users={users} deleteUser={handleDelete} />;
        }}
      />
      <Route
        path="/user/:userId?"
        render={reactRouterProps => {
          return (
            <ManageUser
              users={users}
              onAddUser={handleAddUser}
              onEditUser={handleEditUser}
            />
          );
        }}
      />
    </InternationalizationContext.Provider>
  );
}

export default App;
