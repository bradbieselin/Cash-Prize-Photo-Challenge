import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SubmissionForm = ({ addSubmission }) => {
  const [challengeInput, setChallengeInput] = useState('cityscape');
  const [photographerInput, setPhotographerInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newSubmission = {
      id: uuidv4(),
      challenge: challengeInput,
      photographer: photographerInput,
      image: imageInput,
      votes: 0,
    };
    addSubmission(newSubmission);
    setPhotographerInput('');
    setImageInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        onChange={(e) => setChallengeInput(e.target.value)}
        value={challengeInput}
        >
        <option value="cityscape">Cityscape</option>
        <option value="nature">Nature</option>
        <option value="portrait">Portrait</option>
      </select>

      <label>Photographer: </label>
      <input
        type="text"
        onChange={(e) => setPhotographerInput(e.target.value)}
        value={photographerInput}
      />
      <label>Image: </label>
      <input
        type="text"
        onChange={(e) => setImageInput(e.target.value)}
        value={imageInput}
      />
      <input type="submit"></input>
    </form>
  );
};

export default SubmissionForm;
