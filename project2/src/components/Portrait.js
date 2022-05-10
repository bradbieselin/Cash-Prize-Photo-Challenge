import React from 'react';
import SubmissionsContainer from './SubmissionsContainer';

const Portrait = ({ submissions }) => {
    const filteredSubmissions = submissions.filter((submission) => submission.challenge === "portrait");
    return (
        <div>
            <SubmissionsContainer filteredSubmissions={filteredSubmissions} />
        </div>
    );
};

export default Portrait;