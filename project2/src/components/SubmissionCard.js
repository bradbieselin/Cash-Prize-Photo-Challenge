import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SubCard = styled.div`
  height: 400px;
  width: 500px;
  margin: 1rem;
  overflow: hidden;
  display: flex;
`;

const SubImage = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

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
    <SubCard>
      <p>Photographer: {submission.photographer}</p>
      <button onClick={handleClick}>Votes: {votes}</button>
      <SubImage src={submission.image} />
    </SubCard>
  );
};

export default SubmissionCard;
