import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Select = styled.select`
  width: 35%;
  padding: 2px 5px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  text-align: center;
`

const SelectContainer = styled.div`
padding: 1.5rem;
`

const Input = styled.input`
margin:10px 0;
width: 80%;
`

const SubmitButton = styled.input`
width: 20%;
`

const SubmitContainer = styled.div`
padding: 1.5rem;
`

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
    <div className="block">
      <form onSubmit={handleSubmit}>
        <SelectContainer>
          <h3>Challenge Category: </h3>
        <Select
          onChange={(e) => setChallengeInput(e.target.value)}
          value={challengeInput}
          >
          <option value="cityscape">Cityscape</option>
          <option value="nature">Nature</option>
          <option value="portrait">Portrait</option>
        </Select>
        </SelectContainer>

        <div>
        <h3>Photographer's Name: </h3>
        <Input
          placeholder = "Name..."
          type="text"
          onChange={(e) => setPhotographerInput(e.target.value)}
          value={photographerInput}
        />
        </div>

        <div>
        <h3>Image Link: </h3>
        <Input
          placeholder = "Image link here..."
          type="text"
          onChange={(e) => setImageInput(e.target.value)}
          value={imageInput}
        />
        </div>

        <SubmitContainer>
        <SubmitButton type="submit"></SubmitButton>
        </SubmitContainer>
      </form>
    </div>
  );
};

export default SubmissionForm;
