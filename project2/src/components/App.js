import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import CityScape from './CityScape';
import Nature from './Nature';
import Portrait from './Portrait';
import NavBar from './NavBar';
import SubmissionForm from './SubmissionForm';

function App() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/submissions')
      .then((res) => res.json())
      .then((data) => setSubmissions(data));
  }, []);

  function addSubmission(newSub) {
    fetch(`http://localhost:3000/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSub),
    })
      .then((res) => res.json())
      .then(setSubmissions([...submissions, newSub]));
  }

  function updateVotes(id, update) {
    fetch(`http://localhost:3000/submissions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => updateLikes(data));
  }

  function updateLikes(obj) {
    setSubmissions(
      submissions.map((submission) => {
        if (submission.id === obj.id) {
          return obj;
        }
        return submission;
      })
    );
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
          <CityScape submissions={submissions} updateVotes={updateVotes} />
        </Route>
        <Route path="/nature">
          <Nature submissions={submissions} updateVotes={updateVotes} />
        </Route>
        <Route path="/portrait">
          <Portrait submissions={submissions} updateVotes={updateVotes} />
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
