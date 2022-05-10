import React from 'react';
import SubmissionCard from './SubmissionCard';
import styled from "styled-components";

const SubContainerGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    margin: 2.5rem;
`

const SubmissionsContainer = ({ filteredSubmissions }) => {
    return (
        <SubContainerGrid>
            {filteredSubmissions.map(submission => <SubmissionCard key={submission.id} submission={submission} />)} 
        </SubContainerGrid>
    );
};

export default SubmissionsContainer;