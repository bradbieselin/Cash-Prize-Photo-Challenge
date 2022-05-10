import React, { useState, useEffect } from "react";
import {  Route, Switch  } from "react-router-dom";
import Home from "./Home";
import CityScape from "./CityScape";
import Nature from "./Nature";
import Portrait from "./Portrait";
import NavBar from "./NavBar";
import SubmissionForm from "./SubmissionForm";

function App() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/submissions")
    .then(res => res.json())
    .then(data => setSubmissions(data))
  }, []);

  function addSubmission(newSub) {
    fetch(`http://localhost:3000/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSub)
    })
    .then(res => res.json())
    .then(setSubmissions([...submissions, newSub]));
  }

  return (
    <div className="App">
      <h1>Photo Challenge</h1>
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
        <Route path="/submit">
          <SubmissionForm addSubmission={addSubmission} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
