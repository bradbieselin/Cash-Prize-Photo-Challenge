import React from 'react';
import styled from "styled-components";

const SubCard = styled.div`
    height: 400px;
    width: 500px;
    margin: 1rem;
    overflow: hidden;
    display: flex;
`

const SubImage = styled.img`
    width: 100%;
    object-fit: cover;
    overflow: hidden;
`

const SubmissionCard = ({ submission }) => {
    return (
        <SubCard>
            <p>Photographer: {submission.photographer}</p>
            <button>Votes: {submission.votes}</button>
            <SubImage src={submission.image} />
        </SubCard>
    );
};

export default SubmissionCard;