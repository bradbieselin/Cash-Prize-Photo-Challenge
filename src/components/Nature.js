import React from 'react';
import SubmissionsContainer from './SubmissionsContainer';

const Nature = ({ submissions, updateVotes }) => {
    const filteredSubmissions = submissions.filter((submission) => submission.challenge === "nature");
    return (
        <div>
            <SubmissionsContainer filteredSubmissions={filteredSubmissions} updateVotes={updateVotes} />
        </div>
    );
};

export default Nature;