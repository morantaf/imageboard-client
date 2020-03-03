import React from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import { Route } from "react-router";
import UsersListContainer from "./components/UsersListContainer";
import ProfileContainer from "./components/ProfileContainer";

function App() {
  return (
    <div>
      <Route exact path="/" component={ListContainer} />
      <Route exact path="/users" component={UsersListContainer} />
      <Route path="/users/:id" component={ProfileContainer} />
    </div>
  );
}

export default App;
