import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
