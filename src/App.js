import React from "react";
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";


import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/projects"
            render={(props) => (
              <Projects
                {...props}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <Home
                {...props}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};



export default App;
