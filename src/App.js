import React from "react";
import Users from "./Users";
import Home from "./Home";
import ManageUser from "./ManageUser";
import Nav from "./Nav";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      {/* When the URL is at root, load the users component. */}
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} />
      <Route path="/user" component={ManageUser} />
    </>
  );
}

export default App;
