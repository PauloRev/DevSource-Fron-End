import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ShareContent from "../pages/ShareContent";
import Profile from "../pages/Profile";
import MyProfile from "../pages/MyProfile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/share-content" component={ShareContent} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/my-profile" component={MyProfile} isPrivate />
    </Switch>
  );
}
