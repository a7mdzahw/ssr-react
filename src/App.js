import React from "react";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./routes";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
