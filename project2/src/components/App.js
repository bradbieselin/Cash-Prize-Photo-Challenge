import React, { useState, useEffect } from "react";
import {  Route, Switch  } from "react-router-dom";
import Home from "./Home";
import CityScape from "./CityScape";
import Nature from "./Nature";
import Portrait from "./Portrait";
import NavBar from "./NavBar";

function App() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/submissions")
    .then(res => res.json())
    .then(data => setSubmissions(data))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cityscape">
          <CityScape submissions={submissions} />
        </Route>
        <Route path="/nature">
          <Nature submissions={submissions} />
        </Route>
        <Route path="/portrait">
          <Portrait submissions={submissions} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;