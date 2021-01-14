import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
// import Home from "./routes/Home";
import App from "./App";
import "./App.css";
import "./Routes.css";

function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact={true}/>
      <div className="country">
        <Link to={{
          pathname: "/traffic",
          state: {}
        }}>
          <h3>독일</h3>
          <h5>GERMANY</h5>
        </Link>
      </div>
      <Route path="/traffic" exact={true} component={App} />
      {/* <Route path="/movie/:id" component={Detail} /> */}
    </HashRouter>
  );
}

export default Routes;