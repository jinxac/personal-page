import React from "react";
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";


import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
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
