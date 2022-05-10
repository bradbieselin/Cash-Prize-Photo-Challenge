import React from 'react';
import SubmissionsContainer from './SubmissionsContainer';

const Nature = ({ submissions }) => {
    const filteredSubmissions = submissions.filter((submission) => submission.challenge === "nature");
    return (
        <div>
            <SubmissionsContainer filteredSubmissions={filteredSubmissions} />
        </div>
    );
};

export default Nature;