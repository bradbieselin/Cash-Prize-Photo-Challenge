import React from 'react';
import SubmissionsContainer from './SubmissionsContainer';

const CityScape = ({ submissions }) => {
    const filteredSubmissions = submissions.filter((submission) => submission.challenge === "cityscape");
    return (
        <div>
            <SubmissionsContainer filteredSubmissions={filteredSubmissions} />
        </div>
    );
};

export default CityScape;