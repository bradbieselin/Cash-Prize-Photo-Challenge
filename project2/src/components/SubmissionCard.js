import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SubImage = styled.img`
    width: 100%;
    height: 78%;
    object-fit: cover;
    overflow: hidden;
`

const SubmissionCard = ({ submission, updateVotes }) => {
  const [votes, setVotes] = useState(submission.votes);

  function handleClick() {
    setVotes((votes) => votes + 1);
  }

  useEffect(() => {
    let updatedVotes = {
      votes: votes,
    };
    updateVotes(submission.id, updatedVotes);
  }, [votes]);

  return (
    <div className="blockCard">
      <p>Photographer: {submission.photographer}</p>
      <button onClick={handleClick}>Votes: {votes}</button>
      <SubImage src={submission.image} />
    </div>
  );
};

export default SubmissionCard;