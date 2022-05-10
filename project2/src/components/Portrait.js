import React from 'react';
import SubmissionsContainer from './SubmissionsContainer';

const Portrait = ({ submissions, updateVotes }) => {
  const filteredSubmissions = submissions.filter(
    (submission) => submission.challenge === 'portrait'
  );
  return (
    <div>
      <SubmissionsContainer
        filteredSubmissions={filteredSubmissions}
        updateVotes={updateVotes}
      />
    </div>
  );
};

export default Portrait;
