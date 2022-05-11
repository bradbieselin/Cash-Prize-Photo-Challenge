import React from 'react';
import SubmissionsContainer from './SubmissionsContainer';

const CityScape = ({ submissions, updateVotes }) => {
    const filteredSubmissions = submissions.filter((submission) => submission.challenge === "cityscape");
    return (
        <div>
            <SubmissionsContainer filteredSubmissions={filteredSubmissions} updateVotes={updateVotes}/>
        </div>
    );
};

export default CityScape;
